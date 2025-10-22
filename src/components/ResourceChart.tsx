import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ResourceChartProps {
  data: Array<{
    time: string;
    cpu: number;
    memory: number;
    storage: number;
  }>;
}

export const ResourceChart = ({ data }: ResourceChartProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Resource Usage Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="cpu" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            name="CPU %"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="memory" 
            stroke="hsl(var(--accent))" 
            strokeWidth={2}
            name="Memory %"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="storage" 
            stroke="hsl(var(--warning))" 
            strokeWidth={2}
            name="Storage %"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
