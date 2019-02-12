import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience1 from "./experience1";
import Experience2 from "./experience2";
import Experience3 from "./experience3";
import Experience4 from "./experience4";
import Experience5 from "./experience5";
import Experience6 from "./experience6";
import Volunteer from "./volunteer";
import Skills from "./skills";

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
            <h2>Skills</h2>
            <Skills />
            <hr stle={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={"February 2018"}
              endYear={'December 2018'}
              schoolName="Woz-U"
              schoolDescription="Woz U, Scottsdale, AZ Full Stack Certificate December 2018
                                A full-time 33 weeks boot camp, with an emphasis on Full-Stack .Net Development with multiple languages and frameworks."
            />
            <hr stle={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience1
              startYear={"November 2016"}
              endYear={"Present"}
              jobName="La-Z-Boy"
            />

            <Experience2
              startYear={"Septemeber 2015"}
              endYear={"November 2016"}
              jobName="La-Z-Boy"
            />

            <Experience3
              startYear={"October 2012"}
              endYear={"Septemeber 2015"}
              jobName="La-Z-Boy"
            />
            <Experience4
              startYear={"March 2012"}
              endYear={"October 2012"}
              jobName="Stream Gobal Solutions"
            />

            <Experience5
              startYear={"October 2006"}
              endYear={"August 2011"}
              jobName="Verizon Wireless"
            />
            <Experience6 />
            <hr stle={{ borderTop: "3px solid #e22947" }} />
            <h2>Volunteer</h2>
            <Volunteer />
            <hr stle={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
