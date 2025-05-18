import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import type { ByCategoryProps } from "../../../types/category";
const COLORS = [
  "#22c55e", 
  "#eab308", 
  "#f97316", 
  "#a855f7", 
  "#ec4899", 
  "#84cc16", 
  "#facc15", 
  "#fb923c", 
  "#d946ef", 
  "#f472b6", 
];

export default function Index({ data }: ByCategoryProps) {
  
  const baseHeight = 255;
  const extraHeightPerItem = 20;
  const minItems = 6;
  const extraHeight = Math.max(0, data.length - minItems) * extraHeightPerItem;
  const containerHeight = baseHeight + extraHeight;

  const chartData = data.map((item, index) => ({
    name: item.category,
    value: item.count,
    color: COLORS[index % COLORS.length],
  }));

  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div
      className="col-span-3 relative rounded-[10px] px-[17px] py-[21px] !pb-[7px] border border-[#f1f1f1] bg-[#FCFCFC]"
      style={{ height: containerHeight }}>
      <p className="font-[500] text-[15px] leading-[32px] mb-[4px]">Blogs by category</p>
      <div className="relative w-full pointer-events-none">
        <ResponsiveContainer width="100%" height={130}>
          <PieChart margin={{ top: 0, bottom: -75 }}>
            <Pie
              data={[{ value: 100 }]}
              startAngle={180}
              endAngle={0}
              innerRadius={79}
              outerRadius={101}
              fill="rgba(244, 245, 250, 1)"
              stroke="rgba(239, 239, 239, 1)"
              strokeWidth={1}
              dataKey="value"
              cornerRadius={8}
            />
            <Pie
              data={chartData}
              startAngle={180}
              endAngle={0}
              innerRadius={81}
              outerRadius={99}
              cornerRadius={6}
              paddingAngle={1}
              strokeWidth={0}
              dataKey="value"
              fill="#f9f9f9"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-[4px]">
          <p style={{ fontSize: 28, fontWeight: "600" }}>{totalCount}</p>
          <div style={{ height: 1, background: "rgba(244, 245, 250, 1)" }}></div>
          <p style={{ fontSize: 12, fontWeight: "400", color: "rgba(58, 53, 65, 0.6)" }}>Total</p>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mt-[-10px]">
        {chartData.map((cat, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                className="w-[4px] h-[4px] mr-[4px] rounded-full"
                style={{ backgroundColor: cat.color }}
              ></span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "rgba(58, 53, 65, 0.87)",
                }}
              >
                {cat.name}
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: "700",
                color: "rgba(58, 53, 65, 1)",
              }}
            >
              {cat.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}