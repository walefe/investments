import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function Graphics() {
  const [investment] = useSelector((state) => state.investments);

  if (investment.data.metadata) {
    return (
      <LineChart
        width={840}
        height={500}
        data={investment}
        margin={{ top: 15, right: 20, bottom: 15, left: 20 }}
      >
        <Line type="monotone" dataKey="unitPrice" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="6 6" />
        <XAxis dataKey="dueDate" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    );
  }

  return (
    <LineChart
      width={840}
      height={500}
      data={investment.data}
      margin={{ top: 15, right: 20, bottom: 15, left: 20 }}
    >
      <Line type="monotone" dataKey="unitPrice" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="6 6" />
      <XAxis dataKey="dueDate" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}
