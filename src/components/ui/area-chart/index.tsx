import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { formatMonth } from "../../../helpers/formatMonth";
import type { ByCreatedDateProps } from "../../../types/date";

export default function Index({ data }: ByCreatedDateProps) {

  const chartData = data.map((item) => ({
    month: item.month,
    value: item.count,
  }));

  return (
    <div
      className="col-span-3 rounded-[10px] border py-[21px] border-[#f1f1f1] bg-[#FCFCFC]"
      style={{maxHeight:255 }}
    >
      <p className="font-[500] text-[15px] leading-[32px] mb-[4px] px-[16.77px]">
        Blogs by Created date
      </p>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart
          data={chartData}
          height={100}
          margin={{ top: 0, right: 20, left: -30, bottom: -15 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="month"
            tickFormatter={formatMonth}
            tick={{
              fontSize: 8,
              fill: "rgba(58, 53, 65, 0.68)",
              fontWeight: "400",
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[10, 20]}
            ticks={[0,5,10,15,20]}
            tick={{
              fontSize: 8,
              fill: "rgba(58, 53, 65, 0.38)",
              fontWeight: "500",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#7c3aed"
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
