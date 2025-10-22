import { Card } from "@/components/ui/card";
import { Leaf, Zap } from "lucide-react";

interface EcoMetricsProps {
  energyConsumption: number;
  carbonEmissions: number;
}

export const EcoMetrics = ({ energyConsumption, carbonEmissions }: EcoMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 bg-gradient-primary shadow-glow border-0">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white/90 mb-1">Energy Consumption</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{energyConsumption.toFixed(2)}</span>
              <span className="text-lg text-white/80">kWh</span>
            </div>
            <p className="text-xs text-white/70 mt-2">Based on current resource usage</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-eco shadow-glow border-0">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white/90 mb-1">Carbon Emissions</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{carbonEmissions.toFixed(3)}</span>
              <span className="text-lg text-white/80">kg CO₂</span>
            </div>
            <p className="text-xs text-white/70 mt-2">Environmental impact calculated</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
