import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Chart from "./Chart"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar id="nav" variant="dark">
        <Navbar.Brand id="brand" href="/">
          <p id="logo">Μίδας </p>| PROJECT MIDAS
        </Navbar.Brand>
      </Navbar>
      <body className="App-body">
        <Container>
          <Row>
            <Col>
              <h1 id="title">Introducing Midas</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p id="tagline">
                A sentiment and trend analysis tool for Gold prices.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">
                    Sentiment Analysis
                  </Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Midas retrieves thousands of articles from around the globe, processes them using
                    an NLTK sentiment classifier, and generates a keyword heatmap and sentiment graph.
                  </Card.Text>
                  <Button className="button" variant="dark" size="lg">
                    Analyse
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              <Card style={{ width: "18rem", height: "20rem"}}>
                <Card.Body>
                  <Card.Title className="mb-2 text-muted">
                    Trend Prediction
                  </Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Midas uses a Long Term Short Memory (LSTM) Recurrent Neural Network built with Keras  
                    and trained on years of historical price action data, 
                    to generate future trendline predictions.
                  </Card.Text>
                  <Button className="button" variant="dark" size="lg">
                    Predict
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Chart/>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
