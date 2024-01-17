import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
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
       <span className={classes.lastDay} ref={props.forwardedRef}>
        Last Day : 25 Apr 2015
      </span>
    </div>
  );
};

export default Projects;
