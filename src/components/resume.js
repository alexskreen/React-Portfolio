import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require('../img/Profile Picture.png')}
                className="about-img"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <div className="resume-left-col">
              <h2 style={{ paddingTop: "0em" }}>Alex Skreen</h2>
              <h4 style={{ color: "grey" }}>Full Stack Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <p>
                I was born and raised in Portland, Oregon. I
                graduated from Oregon State University with a bachelors in
                Marketing. My career started in sales while in the pursuit of
                a marketing/advertising job. After a while of playing around on
                online coding classes I decided to make the jump into the world
                of tech! This lead me to enrolling in Epicodus to study web
                development, and here we are today. I recently completed an
                internship with Theorem Agency, and I'm currently working as a 
                full stack developer at GarageGymReviews.com. I'm seeking a 
                software development position.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              {/* <div className="about-address">
                <h5>Address:</h5>
                <p>21901 SW Blackfoot Drive</p>
                <p>Tualatin, Or 97062</p>
              </div> */}
              <h5>phone:</h5>
              <p>(503) 548-7289</p>
              <h5>Email:</h5>
              <p>skreenalex@gmail.com</p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Experience</h3>

            <Experience
              startMonth={"October"}
              startYear={2020}
              endMonth={"Current"}
              // endYear={2020}
              companyName="Garage Gym Reviews"
              companyPosition="Full Stack Developer"
              companyDescription1="Created streamlined user experience"
              companyDescription2="Designed new gym builder tool"
              companyDescription3="Developed social media platform for users to interact"
            />

            <Experience
              startMonth={"June"}
              startYear={2020}
              endMonth={"August"}
              endYear={2020}
              companyName="Theorem Agency"
              companyPosition="Software Engineer Intern"
              companyDescription1="Created new Pre/Post game site for the Portland Trailblazers using Drupal"
              companyDescription2="Developed internal HR Portal using React"
              companyDescription3="Updated Ford and Hyundai sites using DealerOn CMS"
            />

            <Experience
              startMonth={"April"}
              startYear={2019}
              endMonth={"January"}
              endYear={2020}
              companyName="Deltek"
              companyPosition="Account Executive"
              companyDescription1="Specialized in helping small to mid-sized firms streamline their ERP and project management systems"
              companyDescription2="Full cycle SaaS sales including prospecting, technical demo, services, and implementation"
              companyDescription3="Developed new email marketing plan implemented by the team to drive more opportunities"
            />

            <Experience
              startMonth={"September"}
              startYear={2014}
              endMonth={"February"}
              endYear={2019}
              companyName="ShopKeep"
              companyPosition="Senior Account Executive"
              companyDescription1="Generated over 6 million net bookings by cultivating and maintaining relationships with SMBs and franchises."
              companyDescription2="Trained 15 sales development representatives and new specialists."
              companyDescription3="Assisted management and sales analytics teams in creating a new consultative sales strategy."
            />

            <Experience
              startMonth={"June"}
              startYear={2013}
              endMonth={"August"}
              endYear={2014}
              companyName="Enterprise Rent-A-Car"
              companyPosition="Assistant Manager"
              companyDescription1="Promoted into the Best Person Program at the Portland International Airport."
              companyDescription2="Top 10 of 100+ trainees in sales every month in Oregon and Washington."
              companyDescription3="Passed Management Qualification Interview and completed Management Trainee Program"
            />

            {/* Change the color of this hr to something blueish */}
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Epicodus"
              schoolDescription1="Certificate in mobile and web development."
              schoolDescription2="800 hours of pair  programing."
              schoolDescription3="Passed weekly code reviews for individual and team projects."
            />

            <Education
              startYear={2008}
              endYear={2013}
              schoolName="Oregon State University"
              schoolDescription1="BS in Marketing"
              schoolDescription2="President of the Oregon State Hockey Club"
              schoolDescription3="Vice President of Phi Kappa Psi Fratnerity"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills
              skill1="HTML"
              skill2="CSS/SCSS"
              skill3="Javascript"
              skill4="React"
              skill5="Redux"
              skill6="Unity"
              skill7="NodeJS"
              skill8="jQuery"
              skill9="Git"
              skill10="Npm"
              skill11="Webpack"
              skill12="C#"
              skill13="Salesforce"
              skill14="Microsoft Teams"
              skill15="Asana"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
