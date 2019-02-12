import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience4 extends Component {
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
          <p>
            <div>
              <p>Tech Support- Stream Global Services, Phoenix, AZ</p>
              <li>pple Tech support</li>
              <li>iMac, iMac Pro, MacBook, iPad and iPhone Support</li>
              <li>Entering data into a computer</li>
              <li>Answered calls and responded to emails.</li>
              <li>Research required information using available resources</li>
              <li>Managed and resolve customer complaints</li>
            </div>
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience4;
