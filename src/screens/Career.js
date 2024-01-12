import React, { useRef, useState } from "react";
import VerticalNavbar from "../component/vertical-navbar";
import { Hidden, makeStyles } from "@material-ui/core";
import Companies from "../component/company/copmanies";
import Projects from "../component/project/project";
import { companyData } from "../component/company/company-data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <div className={classes.projectContainer}>
          <Projects forwardedRef={projectDetailsRef} />
        </div>
        </Hidden>
        

        <Hidden smUp>
        {companyData.map((_dta) => {
          return (
            <div style={{boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)', padding:'10px 5px'}}>
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
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              {displayProjectsOnMobileView.id === _dta.id ?
              <div style={{ padding: '20px 10px'
            }}>
                {_dta.projects.map((project) => {
                  return(
                    <div>
                      <span>{project.projectTitle}</span>
                      <span style={{padding: '4px 4px'}}>{project.projectDescription}</span>
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
