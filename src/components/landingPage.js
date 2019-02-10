import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C5603AQFZmk8ezJ2fgA/profile-displayphoto-shrink_200_200/0?e=1555545600&v=beta&t=y4kws1WuhE7ZC3u3i-nz7oWRv9rArD9uqDCZPwFhdb8"
              alt="avatar"
              calssname="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Satck Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javasript | React | React Native | NodeJs
                | Express | MongoDB| MySQL
              </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/cuzqulu/"
                  rel="noonopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*GitHub*/}
                <a
                  href="https://github.com/luiscuzquen"
                  rel="noonopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
