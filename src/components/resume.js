import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media.licdn.com/dms/image/C5603AQFZmk8ezJ2fgA/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=y4kws1WuhE7ZC3u3i-nz7oWRv9rArD9uqDCZPwFhdb8"
                alt="avtar"
                style={{ height: "auto" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Luis Cuzquen</h2>
            <h4 style={{ color: "grey" }}>Full Stack Software Programmer</h4>
            <hr style={{ borderTop: "3px solid purple", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <hr style={{ borderTop: "3px solid purple", width: "50%" }} />
            <h5>Phone</h5>
            <p>(480) 710-6132</p>
            <h5>Email</h5>
            <p>cuzquenjr@gmail.com</p>
            <h5>Web</h5>
            <p>MyWebsite.com</p>
            <hr style={{ borderTop: "3px solid purple", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
