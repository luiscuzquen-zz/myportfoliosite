import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class Experience3 extends Component {
  state = {};
  render() {
    return(<Grid>
        <Cell col={4}><p>{this.props.startYear} - {this.props.endYear}</p></Cell>
        <Cell col={8}><h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4><p><div>
                <p>Operations Manager- La-Z-Boy of Arizona, Phoenix, AZ</p>
                <li>Customer Service</li>
                <li>Entering data into a computer</li>
                <li>Linux and Windows Server maintenance</li>
                <li>Filing records</li>
                <li>Answered calls and responded to emails</li>
              </div></p></Cell>
    </Grid>);
  }
}

export default Experience3;
