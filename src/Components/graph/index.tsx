"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./graph.css";

const GraphLine = () => {
  const data = [
    {
      name: "Semana 1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Semana 1",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        className="bg-[#8b8b8b11] rounded-lg"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDashoffset="3" opacity={0.4} />
        <XAxis dataKey="name" className="line" />
        <YAxis />
        <Line
          type="monotone"
          strokeWidth={3}
          dataKey="pv"
          stroke="#000000"
          activeDot={{ r: 8 }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { GraphLine };
