import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class Experience1 extends Component {
  state = {};
  render() {
    return(<Grid>
        <Cell col={4}><p>{this.props.startYear} - {this.props.endYear}</p></Cell>
        <Cell col={8}><h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4><p><div>
                <p>Store Operations Support- La-Z-Boy of Arizona, Phoenix, AZ</p>
                <li>POS Training and Development</li>
                <li>CRM Training and Development</li>
                <li>Visual Management Development</li>
                <li>Tracking Development</li>
                <li>
                  Constructed Excel format files ex. Goal sheets, tracking and
                  scheduling
                </li>
                <li>Training documents creation</li>
                <li>WordPress new internal site</li>
              </div></p></Cell>
    </Grid>);
  }
}

export default Experience1;
