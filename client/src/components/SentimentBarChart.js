import React, { PureComponent } from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export default class SentimentBarChart extends PureComponent {
  render() {
    const data = [
      { name: "Long", value: this.props.long },
      { name: "Short", value: this.props.short },
      { name: "Neutral", value: this.props.neutral },
    ];
    //#6E757C
    return (
        <BarChart width={400} height={200} data={data}>
          <Bar dataKey="value" fill="#F5F5F5" />
        </BarChart>
      );
  }
}
