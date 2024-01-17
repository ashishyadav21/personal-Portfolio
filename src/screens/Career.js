import React, { useRef, useState } from "react";
import VerticalNavbar from "../component/vertical-navbar";
import { Hidden, makeStyles } from "@material-ui/core";
import Companies from "../component/company/copmanies";
import Projects from "../component/project/project";
import { companyData } from "../component/company/company-data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { style } from "@material-ui/system";

const useStyle = makeStyles(() => ({
  outerContainer: {
    backgroundColor: "#EDEEF2",
  },
  nvaBarContainer: {
    position: "sticky",
    top: 0,
    backgroundColor: "#FFFFFF",
    height: "10%",
    zIndex: "2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "inherit",
    filter: (props) =>
      props.pathname === "/career" && "drop-shadow(0px 0px 1px black)",
    "& nav": {
      transform: "rotate(90deg)",
    },
  },
  innerContainer: {
    display: "flex",
    padding: "25px 40px",
    flexDirection: "column",
  },
  projectContainer: {
    width: "70%",
    paddingTop: "20px",
    backgroundColor: "#ffffff",
    height: "fit-content",
    filter: "drop-shadow(2px 4px 6px black)",
  },
  companyContainer: {
    width: "30%",
    position: "fixed",
    right: "0",
  },
}));

const Career = (props) => {
  const pathname = props?.location?.pathname;
  const [displayProjectsOnMobileView, setDisplayProjectsOnMobileView] = useState({})

  const projectDetailsRef = useRef(null);
  const companyDetailRef = useRef(null)

  const classes = useStyle({ ...props, pathname });
 
  const displayProjects = (value) => {
    let exists = Object.values(displayProjectsOnMobileView).includes(value);
    if(!exists){
      setDisplayProjectsOnMobileView({...displayProjectsOnMobileView, id:value})
    } else {
       setDisplayProjectsOnMobileView({})

    }
  }

  return (
    <>
      <div className={classes.nvaBarContainer}>
        <VerticalNavbar pathname={pathname} />
      </div>
      <div className={classes.innerContainer}>
        <Hidden xsDown>
        <div className={classes.projectContainer} ref={projectDetailsRef}>
          <Projects forwardedRef={projectDetailsRef} />
        </div>
        </Hidden>
        

        <Hidden smUp>
        {companyData.map((_dta) => {
          return (
            <div style={{boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)', padding:'10px 5px'}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px 5px",
                  }}
                >
                  <span style={{padding: '4px 4px'}}>{_dta.company}</span>
                  <spam style={{padding: '4px 4px'}}>{_dta.JobProfile}</spam>
                </div>
                <span onClick={() => displayProjects(_dta.id)}>
                  {  displayProjectsOnMobileView.id !== _dta.id ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </span>
              </div>
              {displayProjectsOnMobileView.id === _dta.id ?
              <div style={{ padding: '10px 10px'
            }}>
                {_dta.projects.map((project,index) => {
                  return(
                    <div style={{marginTop: '10px', display:'flex', flexDirection:'column'}}>
                      <span style={{padding: '0px 10px',fontWeight:'300'}}>{project.projectTitle}</span>
                      <p style={{padding: '2px 10px',fontWeight:'300'}}>{project.projectDescription}</p>
                      <a href={project.projectLiveUrl} style={{padding: '0px 10px', textDecoration:'none'}}>Click here to Check website online</a>
                      {index !== _dta.projects.length ? <div style={{borderBottom: "0.5px solid #b3abab", padding:'5px'}}></div> : null}
                    </div>
                  )
                })}
              </div>: null}
            </div>
          );
        })}
      </Hidden>

        <Hidden xsDown>
        <div className={classes.companyContainer}>
          <Companies forwardedRef={projectDetailsRef} />
        </div>
        </Hidden>
      </div>
    </>
  );
};

export default Career;
