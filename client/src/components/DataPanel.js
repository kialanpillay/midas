import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SentimentChart from "./SentimentChart";
import SentimentBarChart from "./SentimentBarChart";
import FrequencyTable from "./FrequencyTable";
export default class DataPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.key,
      keywords: ["Gold", "Commodity", " XAUUSD"],
      filtered: [],
    };
    this.setKey = this.setKey.bind(this);
  }

  setKey(key) {
    this.setState({ key: key });
  }

  componentWillReceiveProps(props) {
    const words = this.state.keywords.map((word) => {
      return word.toLowerCase();
    });
    let filtered = [];
    for (let i = 0; i < props.sentimentResponse.frequency.length; i++) {
      if (!words.includes(props.sentimentResponse.frequency[i][0])) {
        filtered.push(props.sentimentResponse.frequency[i]);
      }
    }
    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={(k) => this.setKey(k)}>
        <Tab eventKey="sentiment" title="Sentiment Analysis">
          <div style={{ width: "68rem", height: "36rem", marginTop: "1rem" }}>
            <Card.Body>
              <div className="mb-2 text-muted">
                <h1 className="h1--heading">Fundamental Sentiment (30 Days)</h1>
              </div>
              <div className="mb-2 text-muted" style={{ marginTop: "2rem" }}>
                <Row>
                  <Col>
                    <h2 className="h2--classification-label">Positive:&nbsp;</h2>
                    <h2 className="h2--classification">
                      {this.props.sentimentResponse.positive}%
                    </h2>
                  </Col>
                  <Col>
                    <h2 className="h2--classification-label">Negative:&nbsp;</h2>
                    <h2 className="h2--classification">
                      {this.props.sentimentResponse.negative}%
                    </h2>
                  </Col>
                  <Col>
                    <h2 className="h2--classification-label">Neutral:&nbsp;</h2>
                    <h2 className="h2--classification">
                      {this.props.sentimentResponse.neutral}%
                    </h2>
                  </Col>
                </Row>
              </div>
              <div className="mb-2 text-muted" style={{ marginTop: "1rem" }}>
                <Row>
                  <Col md="auto">
                    <SentimentChart
                      positive={this.props.sentimentResponse.positive}
                      negative={this.props.sentimentResponse.negative}
                      neutral={this.props.sentimentResponse.neutral}
                    />
                  </Col>
                  <Col md="auto">
                    <SentimentBarChart
                      positive={this.props.sentimentResponse.positive}
                      negative={this.props.sentimentResponse.negative}
                      neutral={this.props.sentimentResponse.neutral}
                    />
                  </Col>
                  <Col>
                    <FrequencyTable frequency={this.state.filtered} />
                  </Col>
                </Row>
              </div>
              <div className="mb-2 text-muted" style={{ marginTop: "0rem" }}>
                <Row>
                  <Col>
                    <h4>
                      Articles Retrieved:{" "}
                      {this.props.sentimentResponse.articles}
                    </h4>
                    <h4>
                      Keywords: [
                      {this.state.keywords.map((item) => {
                        return item + " ";
                      })}
                      ]
                    </h4>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </div>
        </Tab>
        <Tab eventKey="trend" title="Trend Prediction">
          <div style={{ width: "68rem", height: "36rem", marginTop: "1rem" }}>
            <Card.Body>
              <div className="mb-2 text-muted">
                <h1 className="h1--heading">Trendline Prediction</h1>
              </div>
              <div className="mb-2 text-muted" style={{ marginTop: "2rem" }}>
                <Row>
                  <Col>
                    <h2>Bull: 34%</h2>
                  </Col>
                  <Col>
                    <h2>Bear: 4%</h2>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
