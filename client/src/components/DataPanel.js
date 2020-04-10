import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SentimentChart from "./SentimentChart"
import SentimentBarChart from "./SentimentBarChart"
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
          <div style={{ width: "68rem", height: "20rem", marginTop: "1rem" }}>
            <Card.Body>
              <Card.Text className="mb-2 text-muted">
                <h1 className="dataHeading" >Gold Price Sentiment (30 Days)</h1>
              </Card.Text>
              <Card.Text className="mb-2 text-muted" style={{marginTop: "2rem" }}>
                <Row>
                  <Col>
                    <h2 className="classificationLabel">Long:&nbsp;</h2>
                    <h2 className="classification">63%</h2>
                  </Col>
                  <Col>
                    <h2 className="classificationLabel">Short:&nbsp;</h2>
                    <h2 className="classification">34%</h2>
                  </Col>
                  <Col>
                    <h2 className="classificationLabel">Neutral:&nbsp;</h2>
                    <h2 className="classification">4%</h2>
                  </Col>
                </Row>
                <Row style={{marginTop: "2rem"}}>
                  <Col md="auto" >
                    <SentimentChart long={63} short={34} neutral={4}/>
                  </Col>
                  <Col md="auto">
                    <SentimentBarChart long={63} short={34} neutral={4}/>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </div>
        </Tab>
        <Tab eventKey="trend" title="Trend Prediction">
          <div style={{ width: "68rem", height: "20rem", marginTop: "1rem"  }}>
            <Card.Body>
              <Card.Text className="mb-2 text-muted">
                <h1 className="dataHeading">Trendline Prediction</h1>
              </Card.Text>
              <Card.Text className="mb-2 text-muted" style={{marginTop: "2rem" }}>
                <Row>
                  <Col>
                    <h2>Bull: 34%</h2>
                  </Col>
                  <Col>
                    <h2>Bear: 4%</h2>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
