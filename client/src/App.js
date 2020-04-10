import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Chart from "./Chart";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      result: ""
    };

    this.handleSentimentAnalysis = this.handleSentimentAnalysis.bind(this);
  }

  handleChange = (event) => {
    //const value = event.target.value;
    //const name = event.target.name;
    //var formData = this.state.formData;
    //formData[name] = value;
    //this.setState({
    //  formData,
    //});
  };

  handleSentimentAnalysis = (event) => {
    //const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch("http://127.0.0.1:5000/sentiment", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
      //body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          result: response.result,
          isLoading: false,
        });
        console.log(response.result)
      });
      window.location.href = "#sentimentContent";
  };
  

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  };

  render() {
    return (
      <div className="App">
        <Navbar id="nav" variant="dark">
          <Navbar.Brand id="brand" href="/">
            <p id="logo">Μίδας </p>| PROJECT MIDAS
          </Navbar.Brand>
        </Navbar>
        <div className="App-body">
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
                      Midas retrieves thousands of articles from around the
                      globe, processes them using an NLTK sentiment classifier,
                      and generates a keyword heatmap and sentiment graph.
                    </Card.Text>
                    <Button className="button" variant="dark" size="lg" onClick={!this.state.isLoading ? this.handleSentimentAnalysis : null}>
                      Analyse
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="auto">
                <Card style={{ width: "18rem", height: "20rem" }}>
                  <Card.Body>
                    <Card.Title className="mb-2 text-muted">
                      Trend Prediction
                    </Card.Title>
                    <Card.Text className="mb-2 text-muted">
                      Midas uses a Long Term Short Memory (LSTM) Recurrent
                      Neural Network built with Keras and trained on years of
                      historical price action data, to generate future trendline
                      predictions.
                    </Card.Text>
                    <Button className="button" variant="dark" size="lg">
                      Predict
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Chart />
              </Col>
            </Row>
            <Row id="sentimentContent">
            <Col md="auto">
                <Card style={{ width: "68rem", height: "20rem" }}>
                  <Card.Body>
                    <Card.Title className="mb-2 text-muted">
                      Sentiment Analysis Results
                    </Card.Title>
                    <Card.Text className="mb-2 text-muted">
                      {this.state.result}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
