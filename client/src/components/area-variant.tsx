import {
  Area,
  Tooltip,
  XAxis,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { CustomTooltip } from "./custom-tooltip";

interface props {
  data: {
    title: string;
    intensity: number;
    relevance: number;
    likelihood: number;
  }[];
}

export const AreaVariant = ({ data }: props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <defs>
          <linearGradient id="intensity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="2%" stopColor="#3d82f6" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#3d82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="relevance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="2%" stopColor="#f43f5e" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#f43f5e" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="likelihood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="2%" stopColor="#16a34a" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#16a34a" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={"title"}
          style={{ fontSize: 12 }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type={"monotone"}
          dataKey={"intensity"}
          stackId={"intensity"}
          strokeWidth={2}
          stroke="#3d82f6"
          fill="url(#intensity)"
          className="drop-shadow-sm"
        />
        <Area
          type={"monotone"}
          dataKey={"relevance"}
          stackId={"relevance"}
          strokeWidth={2}
          stroke="#f43f5e"
          fill="url(#relevance)"
          className="drop-shadow-sm"
        />
        <Area
          type={"monotone"}
          dataKey={"likelihood"}
          stackId={"likelihood"}
          strokeWidth={2}
          stroke="#16a34a"
          fill="url(#likelihood)"
          className="drop-shadow-sm"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
