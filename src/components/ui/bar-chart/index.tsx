import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

import type { ByViewProps } from "../../../types/view";

export default function index({ data }: ByViewProps) {
  
  const barHeight = 4;
  const rowGap = 6;
  const labelHeight = 22;
  const topPadding = 63;
  const containerHeight = topPadding + data.length * (barHeight + labelHeight + rowGap);
  const maxViews = Math.max(...data.map((d) => d.views), 0);

  return (
    <div
      className="col-span-6 rounded-[10px] px-[17px] py-[19.5px] border border-[#f1f1f1] bg-[#FCFCFC]"
      style={{ height: containerHeight }}
    >
      <p className="font-[500] text-[15px] leading-[32px] mb-[8px]">Blogs by view</p>

      <div style={{ display: "flex", flexDirection: "column", gap: rowGap }}>
        {data.map((item, index) => (
          <div key={item.category}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 500,
                fontSize: 14,
                color: "#333",
                marginBottom: 6,
              }}
            >
              <span>{item.category}</span>
              <span>{item.views.toLocaleString()}</span>
            </div>
            <div style={{ width: "100%", height: barHeight }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[item]}
                  margin={{ top: 0, bottom: -0, left: 0, right: 0 }}
                >
                  <XAxis type="number" domain={[0, maxViews]} hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Bar
                    dataKey="views"
                    fill="#8B5CF6"
                    radius={[6, 6, 6, 6]}
                    background={{ fill: "#e5e7eb", radius: 6 }}
                    barSize={barHeight}
                  >
                    <Cell key={`cell-${index}`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


