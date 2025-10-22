import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: LucideIcon;
  color: "primary" | "accent" | "warning";
}

const colorClasses = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  warning: "bg-warning text-white",
};

export const MetricCard = ({ title, value, unit, icon: Icon, color }: MetricCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{value.toFixed(1)}</span>
            <span className="text-lg text-muted-foreground">{unit}</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            color === "primary" ? "bg-primary" : color === "accent" ? "bg-accent" : "bg-warning"
          }`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </Card>
  );
};
