import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingDown, Recycle, Clock } from "lucide-react";

const tips = [
  {
    icon: TrendingDown,
    title: "Scale Down Unused Resources",
    description: "Reduce CPU and memory allocation during off-peak hours to save energy.",
  },
  {
    icon: Recycle,
    title: "Enable Auto-Scaling",
    description: "Automatically adjust resources based on demand to optimize power usage.",
  },
  {
    icon: Clock,
    title: "Schedule Workloads",
    description: "Run heavy tasks during periods with renewable energy availability.",
  },
  {
    icon: Lightbulb,
    title: "Optimize Code Efficiency",
    description: "Efficient code requires less processing power and reduces energy consumption.",
  },
];

export const OptimizationTips = () => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-primary" />
        Green Cloud Optimization Tips
      </h3>
      <div className="space-y-4">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="flex gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg h-fit">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1">{tip.title}</h4>
                <p className="text-xs text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
