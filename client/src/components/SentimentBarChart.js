import React, { PureComponent } from "react";
import { BarChart, Bar } from "recharts";

export default class SentimentBarChart extends PureComponent {
  render() {
    const data = [
      {
        name: "Sentiment",
        positive: this.props.positive,
        negative: this.props.negative,
        neutral: this.props.neutral,
      },
    ];

    return (
      <BarChart width={360} height={210} data={data}>
        <Bar dataKey="positive" fill="#1E88E5" />
        <Bar dataKey="negative" fill="#E53935" />
        <Bar dataKey="neutral" fill="#6E757C" />
      </BarChart>
    );
  }
}
