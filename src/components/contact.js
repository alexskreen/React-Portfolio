import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alex Skreen</h2>
            {/* This is a default avatar. Change this */}
            <img
              src="https://github.com/alexskreen/react-portfolio/blob/master/src/img/Profile%20Picture.png?raw=true"
              alt="avatar"
              className="about-img"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am currently seeking a position as a full-stack developer.
              Please feel free to contact me if you have any questions. I am happy to provide any additional information you might need. I look forward to
              speaking with you.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    503-548-7289
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "18px" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    skreenalex@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    alexskreen
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "22px" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    alexskreen
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
