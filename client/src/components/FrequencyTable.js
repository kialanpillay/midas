import React from "react";
import Table from "react-bootstrap/Table";

export default class FrequencyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        frequency: [['Gold',70],['Market',20],['Commodity',20],['Price',20], ['Metal',20]]
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      frequency: props.frequency.slice(0,5)
    });
     
  }

  render() {
    
    return (
      <Table id="frequencyTable" bordered variant="dark">
        <thead>
          <tr>
            <th style={{width: "30%", color: "#6E757C"}}>Frequency</th>
            <th style={{width: "70%", color: "#6E757C"}}>Phrase </th>
          </tr>
        </thead>
        <tbody>
          {this.state.frequency.map((item, i) => (
                <tr key={i}>
                  <th style={{width: "30%"}}>{item[1]}</th>
                  <th style={{width: "70%"}}>{item[0]}</th>
                </tr>
              ))}
        </tbody>
      </Table>
    );
  }
}
