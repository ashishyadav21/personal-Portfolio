import React from "react";
import VerticalNavBar from "../../component/vertical-navbar";
import { makeStyles, Container } from "@material-ui/core";
import elonMusk from "../../Assets/Images/elon-musk.png";
import AboutMe from "./about-me";
import AboutCareer from "./about-career";
import OutlinedTimeline from "../../component/timeline";
import { educations, experienceData } from "./about-career";

const useStyle = makeStyles(() => ({
  nvaBarContainer: {
    position: "sticky",
    top: 0,
    height: "40px",
    zIndex: "2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "inherit",
    filter: (props) =>
      props.pathname === "/about" && "drop-shadow(0px 0px 1px black)",
    "& nav": {
      transform: "rotate(90deg)",
    },
  },
  oppositeContent: {
    flex: "inherit",
    "&>p": {
      fontSize: "15px",
    },
  },
  tmelineContent: {
    fontSize: "15px",
    display: "flex",
    flexDirection: "column",
  },
  timeLineConnector: {
    borderColor: "#e5a83e !important",
  },
  timeLineDot: {
    backgroundColor: "#e5a83e !important",
  },
}));

const About = (props) => {
   const pathname = props?.location?.pathname;

  const classes = useStyle();
  return (
    <div>
      <div className={classes.nvaBarContainer}>

        <VerticalNavBar pathname={pathname} />
      </div>
      <Container style={{ width: "3508px", height: "2480px" }} fixed>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <div
              style={{
                padding: "30px 30px",
                backgroundColor: "#e5a83e",
                width: "60%",
                height: "30%",
              }}
            >
              <div style={{ height: "250px", width: "300px" }}>
                <img
                  src={elonMusk}
                  alt="profile"
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundColor: "#ca8919",
                    marginTop: "-10px",
                  }}
                >
                  <h2 style={{ margin: "10px" }}>Ashish Yadav </h2>
                  <text style={{ margin: "10px" }}>Web Developer</text>
                </div>
                <AboutMe />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px 30px",
            }}
          >
            <text style={{ padding: "0px 22px", color: "#e5a83e" }}>
              Educations
            </text>
            <div style={{ marginBottom: "20px" }}>
              {!!educations &&
                educations.map((company, index) => {
                  return (
                    <OutlinedTimeline
                      data={company}
                      classes={classes}
                      isLastIndex={educations.length - 1 === index}
                    />
                  );
                })}
            </div>
            <text style={{ padding: "0px 22px", color: "#e5a83e" }}>
              Work Expierence
            </text>
            <div style={{ marginBottom: "20px" }}>
              {!!experienceData &&
                experienceData.map((company, index) => {
                  return (
                    <OutlinedTimeline
                      data={company}
                      classes={classes}
                      isLastIndex={experienceData.length - 1 === index}
                    />
                  );
                })}
            </div>
            <text style={{ padding: "0px 22px" }}>Achivment</text>
            <div style={{ marginBottom: "20px" }}>{/* <AboutCareer /> */}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
