import React, { PureComponent } from "react";
import {
    BarChart, Bar
  } from 'recharts';

export default class SentimentBarChart extends PureComponent {
  render() {
    const data = [
      { name: "Long", value: this.props.long },
      { name: "Short", value: this.props.short },
      { name: "Neutral", value: this.props.neutral },
    ];
    
    return (
        <BarChart width={250} height={150} data={data}>
          <Bar dataKey="value" fill="#6E757C" />
        </BarChart>
      );
  }
}
