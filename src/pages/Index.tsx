import { useState, useEffect } from "react";
import { MetricCard } from "@/components/MetricCard";
import { ResourceChart } from "@/components/ResourceChart";
import { EcoMetrics } from "@/components/EcoMetrics";
import { OptimizationTips } from "@/components/OptimizationTips";
import { Cpu, Database, HardDrive, Activity } from "lucide-react";

interface ResourceData {
  time: string;
  cpu: number;
  memory: number;
  storage: number;
}

const Index = () => {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [storageUsage, setStorageUsage] = useState(38);
  const [chartData, setChartData] = useState<ResourceData[]>([]);
  const [isLive, setIsLive] = useState(true);

  // Calculate energy consumption (simplified formula)
  // Energy (kWh) = (CPU% * 0.1 + Memory% * 0.05 + Storage% * 0.02) / 100
  const energyConsumption = (cpuUsage * 0.1 + memoryUsage * 0.05 + storageUsage * 0.02) / 100;

  // Calculate CO2 emissions
  // CO2 (kg) = Energy (kWh) * 0.5 (avg carbon intensity factor)
  const carbonEmissions = energyConsumption * 0.5;

  // Generate random usage values
  const generateRandomUsage = (current: number, min: number = 20, max: number = 90): number => {
    const change = (Math.random() - 0.5) * 15;
    const newValue = current + change;
    return Math.max(min, Math.min(max, newValue));
  };

  // Update metrics every 5 seconds
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newCpu = generateRandomUsage(cpuUsage);
      const newMemory = generateRandomUsage(memoryUsage);
      const newStorage = generateRandomUsage(storageUsage, 30, 70);

      setCpuUsage(newCpu);
      setMemoryUsage(newMemory);
      setStorageUsage(newStorage);

      // Add to chart data (keep last 20 data points)
      const now = new Date();
      const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      
      setChartData(prev => {
        const newData = [...prev, {
          time: timeString,
          cpu: newCpu,
          memory: newMemory,
          storage: newStorage,
        }];
        return newData.slice(-20); // Keep last 20 points
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive, cpuUsage, memoryUsage, storageUsage]);

  // Initialize chart with some data
  useEffect(() => {
    const initialData: ResourceData[] = [];
    const now = new Date();
    for (let i = 10; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 5000);
      const timeString = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;
      initialData.push({
        time: timeString,
        cpu: 40 + Math.random() * 20,
        memory: 55 + Math.random() * 20,
        storage: 35 + Math.random() * 10,
      });
    }
    setChartData(initialData);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Activity className="w-8 h-8 text-primary" />
                Green Cloud Monitor
              </h1>
              <p className="text-muted-foreground mt-1">Real-time monitoring for sustainable cloud computing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted'}`} />
              <span className="text-sm font-medium text-foreground">{isLive ? 'Live' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Resource Metrics */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Resource Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              title="CPU Usage"
              value={cpuUsage}
              unit="%"
              icon={Cpu}
              color="primary"
            />
            <MetricCard
              title="Memory Usage"
              value={memoryUsage}
              unit="%"
              icon={Database}
              color="accent"
            />
            <MetricCard
              title="Storage Usage"
              value={storageUsage}
              unit="%"
              icon={HardDrive}
              color="warning"
            />
          </div>
        </section>

        {/* Environmental Impact */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Environmental Impact</h2>
          <EcoMetrics 
            energyConsumption={energyConsumption}
            carbonEmissions={carbonEmissions}
          />
        </section>

        {/* Chart */}
        <section>
          <ResourceChart data={chartData} />
        </section>

        {/* Optimization Tips */}
        <section>
          <OptimizationTips />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Green Cloud Computing Mini Project - Demonstrating eco-friendly cloud practices
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
