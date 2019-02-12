import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class volunteer extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>Languages / Frameworks:</p>
        </Cell>
        <Cell col={8}>
          <p>
            Bootstrap, CSS, HTML, jQuery, JavaScript (JS), TypeScript (TS),
            Es6, AngularJS, AJAX, WebAPI and MySQL
          </p>
        </Cell>
        <hr stle={{ borderTop: "3px solid #e22947" }} />
        <Cell col={4}>
          <p>Technologies & Other Skills:</p>
        </Cell>
        <Cell col={8}>
          <p>
            Visual Studio 2015, SQL Server, Git, MVC, 4 Layer Architecture,
            Bower, Dependency Injection, Repository Pattern, Azure, Agile
            Methodologies, SCRUM, Unit Testing, UX/UI
          </p>
        </Cell>
        <Cell col={4}>
          <p>Additional Certifications & Training:</p>
        </Cell>
        <Cell col={8}>
          <p>
            HTML, CSS, WordPress, Excel, Social Media, and troubleshooting with
            Mac OSX and Windows
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default volunteer;
