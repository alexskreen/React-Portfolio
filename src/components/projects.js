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

import BlazersImg from "../img/live-feed.png";
import WitchImg from "../img/The-Witches-Apprentice.jpg";
import CampingImg from "../img/camping-splashscreen.png";
import WODImg from "../img/WOD-Scraper-Full.png";


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
          <Card className="project" shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: "url(" + BlazersImg +")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              Blazers
            </CardTitle>
            <CardText>
              Using the NBA API my partner and I built out a website for the Blazers pre, live, and post game sites. This will display a key players, stats, shot map, and even tickets for upcoming games.
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
            <Card
              className="project"
              shadow={5}
              style={{ minWidth: "450", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                backgroundImage: "url(" + WitchImg +")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
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
    } 
    
    // JS Projects
    // Use the react MDL grid system to create another group of cells if you exceed 3 projects. The margins are funky and need work
    
    else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* JS Project 1 */}
          <Card className="project" shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: "url(" + CampingImg +")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
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
          <Card className="project" shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                backgroundImage: "url(" + WODImg +")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
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
        <div className="tabs">
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
        </div>

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
