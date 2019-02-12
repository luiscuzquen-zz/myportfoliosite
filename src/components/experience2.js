import React, { Component } from "react";
import {Grid, Cell} from 'react-mdl';

class Experience2 extends Component {
  state = {};
  render() {
    return(<Grid>
        <Cell col={4}><p>{this.props.startYear} - {this.props.endYear}</p></Cell>
        <Cell col={8}><h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4><p><div>
                <p>System Administrator- La-Z-Boy of Arizona, Phoenix, AZ 	</p>
                <li>System Administration Windows and Apple products</li>
                <li>Drupal current internal site</li>
                <li>Linux and Windows Server maintenance</li>
                <li>Active Directory, DNS, Lync, Exchange, Group policy maintenance</li>
                <li>GERS and Oracle system maintenance                </li>
                <li>Training documents creation</li>
                <li>Oracle Report Registration</li>
              </div></p></Cell>
    </Grid>);
  }
}

export default Experience2;
