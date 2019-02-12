import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class volunteer extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
          December 2018
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>U The Leader Certification</h4>
          <p>Leadership Seminar Certification</p>
        </Cell>
        <hr stle={{ borderTop: "3px solid #e22947" }} />
        <Cell col={4}>
          <p>
          August 2000-June 2004
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>Community Webpage</h4>
          <p>Internal La-Z-Boy Website for Ronald McDonald House Charities and Drowning Prevention Coalition of Arizona</p>
        </Cell>
        <Cell col={4}>
          <p>
          October 2018
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>Facebook Admin for Drowning Prevention Coalition of Arizona</h4>
          <p>Helped with Facebook post for Drowning Awareness month</p>
        </Cell>
      </Grid>
    );
  }
}

export default volunteer;
