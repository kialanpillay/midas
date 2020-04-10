import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

export default class SentimentChart extends PureComponent {
  render() {
    const data = [
      { name: "Long", value: this.props.long },
      { name: "Short", value: this.props.short },
      { name: "Neutral", value: this.props.neutral },
    ];
    const colors = ["#1E88E5", "#E53935", "#6E757C"];
    return (
      <PieChart width={400} height={200}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx={160}
          cy={180}
          outerRadius={160}
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
