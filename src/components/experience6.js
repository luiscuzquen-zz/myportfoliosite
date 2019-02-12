import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience6 extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
          July 2004-October 2006
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>Warehouse Clerical- La-Z-Boy of Arizona, Phoenix, AZ </h4>
        </Cell>
        <hr stle={{ borderTop: "3px solid #e22947" }} />
        <Cell col={4}>
          <p>
          August 2000-June 2004
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>Server- Freedom Village, Lake Forest, CA</h4>
        </Cell>
      </Grid>
    );
  }
}

export default Experience6;
