import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const useStyle = makeStyles(() => ({
  navBarContainer: {
    alignItems: "flex-end",
    marginRight: "15px",
    "& ul": {
      paddingLeft: "15px",
      listStyleType: "none",
      "& li": {
        writingMode: "tb !important",
        padding: "10px",
      },
    },
  },
  li: {
    writingMode: "tb !important",
    WebkitWritingMode: "vertical-lr",
  },
  navbar: {
    display: "flex",
    alignItems: (props) => props.isOnHomePage && "flex-end",
    height: "100%",
    transform: (props) => props.isbackOfCardVisible && "scale(-1,1)",
  },
  navbarItems: {
    transform: (props) => !props.isbackOfCardVisible && "rotate(180deg)",
    cursor: "pointer",
    "&:hover": {
      color: "#E5A83B",
      textDecorationLine: "underline",
    },
  },
  navbarActive: {
    color: "#E5A83B",
    textDecorationLine: "underline",
  },
}));

const VerticalNavBar = (props) => {
  const { pathname } = props;
  const history = useHistory();

  const isOnCareerPage = pathname === "/career";
  const isOnHomePage = pathname === "/";
  const isOnAboutPage = pathname === "/about";
  const classes = useStyle({
    ...props,
    isOnCareerPage,
    isOnHomePage,
    isOnAboutPage,
  });


  return (
    <div className={classes.navBarContainer}>
      <nav className={classes.navbar}>
        <ul>
          <li
            className={classNames(classes.navbarItems, {
              [classes.navbarActive]: isOnHomePage,
            })}
            style={{ writingMode: "tb" }}
            onClick={() => history.push("/")}
          >
            Home
          </li>
          <li
            className={classNames(classes.navbarItems, {
              [classes.navbarActive]: isOnCareerPage,
            })}
            style={{ writingMode: "tb" }}
            onClick={() => history.push("/career")}
          >
            Career
          </li>
          <li
            className={classNames(classes.navbarItems, {
              [classes.navbarActive]: isOnAboutPage,
            })}
            style={{ writingMode: "tb" }}
            onClick={() => history.push("/about")}
          >
            About
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VerticalNavBar;
