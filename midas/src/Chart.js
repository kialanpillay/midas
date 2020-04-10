import React from "react";

export default class Chart extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "XAUUSD",
      width: 460,
      height: 320,
      locale: "en",
      dateRange: "12m",
      colorTheme: "dark",
      trendLineColor: "#37a6ef",
      underLineColor: "rgba(55, 166, 239, 0.15)",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
    });
    document.getElementById("chart").appendChild(script);
  }

  render() {
    return (
      <div id="chart">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    );
  }
}
