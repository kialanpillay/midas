import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default class SentimentChart extends PureComponent {
  render() {
    const data = [
      { name: "Long", value: this.props.long },
      { name: "Short", value: this.props.short },
      { name: "Neutral", value: this.props.neutral },
    ];
    const colors = ["#1E88E5", "#E53935", "#6E757C"];
    return (
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx={140}
          cy={140}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
