import React, { useRef } from "react";
import VerticalNavbar from "../component/vertical-navbar";
import { makeStyles } from "@material-ui/core";
import Companies from "../component/company/copmanies";
import Projects from "../component/project/project";

const useStyle = makeStyles(() => ({
  outerContainer: {
    backgroundColor: "#0ECEDW",
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
    backgroundColor: "#EDEEF2",
    display: "flex",
    padding: "25px 40px",
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
  console.log("props-career -->", props);
  const pathname = props?.location?.pathname;

  const projectDetailsRef = useRef(null);

  const classes = useStyle({ ...props, pathname });
  return (
    <>
      <div className={classes.nvaBarContainer}>
        <VerticalNavbar pathname={pathname} />
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.projectContainer}>
          <Projects forwardedRef={projectDetailsRef} />
        </div>
        <div className={classes.companyContainer}>
          <Companies forwardedRef={projectDetailsRef} />
        </div>
      </div>
    </>
  );
};

export default Career;
