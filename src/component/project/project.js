import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { getcompanyProjects } from "../company";
import { useSelector } from "react-redux";
import { getCompanyDetails } from "../company/company.slice";
import { get } from "lodash";
import ProjectDetails from "./project-details";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
     padding: "0px 20px",
    backgroundColor: "#ffffff",
   },
  companyInfo: {
    height: "20%",
    display: "flex",
  },
  imageContainer: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "50%",
  },

  joiningInfo: {
    display: "flex",
    justifyContent:'space-between'
  },

  firstDay: {
    color: "green",
    padding: "20px 20px",
  },
  lastDay: {
    display: "flex",
    justifyContent: "flex-end",
    color: "red",
    padding: "20px 20px",
  },
  innerContainer: {
    padding: "10px 20px",
  },
  projectInfo: {
    display: "flex",
    justifyContent: "center",
  },
  container : {
    maxWidth: '800px',
    margin: 'auto'
  }
}));

const Projects = (props) => {
  const classes = useStyles();
  const project = useSelector(getCompanyDetails);
  const projectInfo = get(project, "companyProjects.projects");

  useEffect(() => {
    props.forwardedRef.current.scrollIntoView({ behavior: "smooth" });
  }, [project, props]);

  return (
    <div className={classes.outerContainer}>
      {/* <div className={classes.imageContainer}>
        <img
          src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397189367/9992bfb0c23f6d9a0091d99938fc886e.gif"
          alt="companyLogo"
          style={{
            borderRadius: "80%",
            backgroundColor: "#EDEEF2",
            opacity: "0.4",
          }}
        />
      </div> */}
      <div className={classes.joiningInfo}>
        <span className={classes.firstDay}>Joining Date : 25 Apr 2015</span>
      </div>
      <h2 style={{ display: "flex" }}>Projects : </h2>

      <ProjectDetails
        projectInfo={projectInfo}
        forwardedRef={props.forwardedRef}
      />

{/*        
<div className={classes.container}>
  <h1>Ashish Yadav</h1>
  <h2>Senior Software Developer</h2>

  <address>
    <p>Address: Gurgaon, India 122001</p>
    <p>Phone: +919671761787</p>
    <p>E-mail: a.yadavashish21@gmail.com</p>
  </address>

  <h2>Accomplished Senior Software Developer</h2>
  <p>With 5 years of experience leading projects by acting as architect, developer, and programmer analyst. Proficient in supporting project deliverables and maintaining releases.</p>

  <h2>Education</h2>
  <ul>
    <li>2010-07 - 2014-07: Bachelor of Applied Science in Information Technology, PDM College of Engineering - Bahadurgarh, HR (CGPA: 62.20)</li>
    <li>2009-04 - 2010-03: 10+2, Triveni Memorial Senior Secondary School - Bahadurgarh (CGPA: 6.4)</li>
  </ul>

  <h2>Skills</h2>
  <ul>
    <li>JavaScript - Very Good</li>
    <li>ReactJs - Very Good</li>
   </ul>

  <h2>Work History</h2>

  <h3>2021-05 - Current: Senior Software Developer</h3>
  <p>Protiviti India, Gurgaon</p>
  <ul>
    <li>Build Project from scratch and Setup Project using multiple Technologies.</li>
    <li>Discussed project progress with customers, collected feedback on different stages, and directly addressed concerns.</li>
   </ul>

  {/* <!-- Add more work history entries as needed --> */}

{/* </div> */} 
      <span className={classes.lastDay} ref={props.forwardedRef}>
        Last Day : 25 Apr 2015
      </span>
    </div>
  );
};

export default Projects;
