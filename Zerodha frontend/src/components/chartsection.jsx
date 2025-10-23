import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../data/chartdata.js";

const ChartSection = () => {
  const [activePeriod, setActivePeriod] = useState("1D");
  const periods = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-sm sm:text-base font-medium text-gray-800">
          NIFTY 50
        </h3>
        <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-0">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`px-2 sm:px-3 py-1 text-xs rounded whitespace-nowrap flex-shrink-0 ${
                period === activePeriod
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height={250}
        className="sm:h-64 lg:h-80"
      >
        <LineChart data={chartData}>
          <XAxis
            dataKey="time"
            stroke="#9ca3af"
            style={{ fontSize: "10px" }}
            className="sm:text-xs"
          />
          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: "10px" }}
            className="sm:text-xs"
            domain={["dataMin - 50", "dataMax + 50"]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
