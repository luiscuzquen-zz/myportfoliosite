import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience5 extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          <div>
            <p>Tech Support/Customer Service- Verizon Wireless, Chandler, AZ</p>
            <li>Provided telephone support to internal and external customers.</li>
            <li>Trained co-workers.</li>
            <li>Answered calls and responded to emails.</li>
            <li>Managed and resolve customer complaints.</li>
            <li>Entered new customer information into system.</li>
            <li>Processed orders, forms and applications</li>
            <li>Documented all call information according to standard operating procedures.</li>
            <li>Produced call reports</li>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Experience5;
