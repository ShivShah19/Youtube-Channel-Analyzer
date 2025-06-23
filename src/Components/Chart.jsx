import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export const Chart = ({ data, type, icon }) => {
    if (!data || data.length === 0) {
        return (
            <div className="w-96 h-96 bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-40 h-6 bg-gray-700 rounded-full relative overflow-hidden animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-shimmer" />
                </div>
            </div>
        );
    }

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const average = Math.round(total / data.length);

    return (
        <div className="w-2xl h-96 bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] shadow-xl rounded-2xl p-3 flex flex-col">
            <div className="flex items-center justify-center gap-2 text-white text-lg font-semibold mb-2">
                <div className="w-5 h-5">
                    <img src={icon} alt={type} className="w-full h-full object-cover" />
                </div>

                <span>YouTube {type} Stats</span>
            </div>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="year" stroke="#ccc" />
                        <YAxis
                            stroke="#ccc"
                            tickFormatter={(value) => {
                                if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
                                if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
                                if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
                                return value;
                            }}

                        />

                        <Tooltip
                            formatter={(value) => value.toLocaleString()}
                            contentStyle={{ backgroundColor: "#1f1f1f", borderColor: "#555", color: "#fff" }}
                            labelStyle={{ color: "#fff" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#c084fc" // purple-400
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-3 pt-2 border-t border-[#444] text-center">
                <p className="text-white text-sm font-medium">
                    Total {type}: <span className="text-purple-400 font-semibold">{total.toLocaleString()}</span>
                </p>
                <p className="text-white text-sm font-medium">
                    Average {type}: <span className="text-purple-400 font-semibold">{average.toLocaleString()}</span>
                </p>
            </div>
        </div>
    );
};
