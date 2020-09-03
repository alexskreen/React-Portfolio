import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.0-9/33101815_10211382429863767_877285119323275264_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=_inawl56-UEAX8rrg7W&_nc_ht=scontent.fhio2-1.fna&oh=9862e141f9977961bba59754299d088a&oe=5F760ADCC"
              className="about-img"
              alt="avatar"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | JavaScript | React | NodeJS | C#</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/alexskreen/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/alexskreen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Email */}
                <a
                  href="mailto:skreenalex@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </a>

                {/* Instagram
                <a
                  href="https://www.instagram.com/bearsbetterhavemyhoney/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a> */}

                {/* Facebook
                <a
                  href="https://www.facebook.com/alex.skreen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a> */}

                {/* Twitter */}
                {/* <a
                  href="https://twitter.com/AlexSkreen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a> */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
