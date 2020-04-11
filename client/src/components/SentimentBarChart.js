import React, { PureComponent } from "react";
import { BarChart, Bar } from "recharts";

export default class SentimentBarChart extends PureComponent {
  render() {
    const data = [
      {
        name: "Sentiment",
        long: this.props.long,
        short: this.props.short,
        neutral: this.props.neutral,
      },
    ];

    return (
      <BarChart width={250} height={200} data={data}>
        <Bar dataKey="long" fill="#1E88E5" />
        <Bar dataKey="short" fill="#E53935" />
        <Bar dataKey="neutral" fill="#6E757C" />
      </BarChart>
    );
  }
}
