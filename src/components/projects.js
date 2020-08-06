import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* React Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/alexskreen/react-portfolio/blob/master/src/img/live-feed.png?raw=true) center/cover",
              }}
            >
              Blazers
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/alexskreen/Blazers"
                  GitHub
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );

// Unity Projects

    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="projects-grid">
            {/* Unity Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: 
                    "url(https://connect-prd-cdn.unity.com/20190226/learn/images/8ddaad3f-9339-4a99-8992-87dde17eafac_Project_and_Tutorials_2D_Roguelike_1920x1080_Tutorial_1.jpg) center/cover",
                }}
              >
                The Witch's Apprentice
              </CardTitle>
              <CardText>
                This is an action adventure game that brings the user through
                multiple levels where they must find hidden items and defeat
                enemies to reach the witch!
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    href="https://github.com/alexskreen/thewitchsapprentice"
                    GitHub
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </Button>
                {/* <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button> */}
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          );
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* JS Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/alexskreen/camping/raw/master/src/assets/images/splashscreen.png) center/cover",
              }}
            >
              Camping Trip Planner
            </CardTitle>
            <CardText>
              This application allows a user to organize a camping trip with
              their friends. The webpage allows a user to input their name,
              start and end dates for the trip, and a destination (Town, State)
              and, once submitted, displays a trip planning interface. Users can
              add other campers to the attendee list, add items to-be-packed to
              a collective packing list, and assign to-be-packed items to
              individual attendees by dragging the items from the collective
              packing list and dropping the items into an individual's packing
              list area.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/alexskreen/camping"
                  GitHub
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/alexskreen/WOD-Scraper/blob/master/images/WOD-Scraper-Full.png?raw=true) center/cover",
              }}
            >
              WOD Scraper
            </CardTitle>
            <CardText>
              This application uses Express.js, Node.js, Puppeteer, and
              BodyParser to scrape the internet's most popular gyms for their
              daily workouts or "WODs". It allows the user to select multiple
              gyms at a time and see all their workouts side-by-side.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/alexskreen/WOD-Scraper"
                  GitHub
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } 
    // else if (this.state.activeTab === 3) {
    //   return (
    //     <div>
    //       <h1>This is C#</h1>
    //     </div>
    //   );
    // } 
    // else if (this.state.activeTab === 4) {
    //   return (
    //     <div>
    //       <h1>This is MySQL</h1>
    //     </div>
    //   );
    // }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Unity</Tab>
          <Tab>JavaScript</Tab>
          {/* <Tab>C#</Tab>
          <Tab>MySQL</Tab> */}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
