import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SentimentChart from "./SentimentChart";
import SentimentBarChart from "./SentimentBarChart";
export default class DataPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.key,
    };
    this.setKey = this.setKey.bind(this);
  }

  setKey(key) {
    this.setState({ key: key });
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={(k) => this.setKey(k)}>
        <Tab eventKey="sentiment" title="Sentiment Analysis">
          <div style={{ width: "68rem", height: "32rem", marginTop: "1rem" }}>
            <Card.Body>
              <div className="mb-2 text-muted">
                <h1 className="dataHeading">Economic Sentiment (30 Days)</h1>
              </div>
              <div
                className="mb-2 text-muted"
                style={{ marginTop: "2rem" }}
              >
                <Row>
                  <Col>
                    <h2 className="classificationLabel">Positive:&nbsp;</h2>
                    <h2 className="classification">
                      {this.props.sentimentResponse.positive}%
                    </h2>
                  </Col>
                  <Col>
                    <h2 className="classificationLabel">Negative:&nbsp;</h2>
                    <h2 className="classification">
                      {this.props.sentimentResponse.negative}%
                    </h2>
                  </Col>
                  <Col>
                    <h2 className="classificationLabel">Neutral:&nbsp;</h2>
                    <h2 className="classification">
                      {this.props.sentimentResponse.neutral}%
                    </h2>
                  </Col>
                </Row>
              </div>
              <div
                className="mb-2 text-muted"
                style={{ marginTop: "2rem" }}
              >
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
                </Row>
              </div>
              <div
                className="mb-2 text-muted"
                style={{ marginTop: "0rem" }}
              >
                <Row>
                  <Col>
                    <h3>
                      Articles Retrieved:{" "}
                      {this.props.sentimentResponse.articles}
                    </h3>
                    <h3>Keywords: [Fed, Bullish, XAUUSD, Coronavirus]</h3>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </div>
        </Tab>
        <Tab eventKey="trend" title="Trend Prediction">
          <div style={{ width: "68rem", height: "32rem", marginTop: "1rem" }}>
            <Card.Body>
              <div className="mb-2 text-muted">
                <h1 className="dataHeading">Trendline Prediction</h1>
              </div>
              <div
                className="mb-2 text-muted"
                style={{ marginTop: "2rem" }}
              >
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
