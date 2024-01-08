import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, Hidden } from "@material-ui/core";
import VerticalNavBar from "../component/vertical-navbar";
import background from "../Assets/Images/desktophdwallpaper_org.jpeg";
import Image from "../component/image";
import Profile from "../component/profile";
import elonMusk from "../Assets/Images/elon-musk.png";
import ArrowBox from "../component/arrow-box";
import classNames from "classnames";

const data = {
  menus: [
    {
      menuName: "menu1",
      target: [
        { value: "value", target: "https://www.google.com" },
        { value: "value1", target: "https://www.google.com" },
        { value: "value2", target: "https://www.google.com" },
      ],
    },
  ],
};

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
  },
  innerContainer: {
    width: "70%",
    height: "70%",
    padding: "30px 30px",
    margin: "auto",
    backgroundColor: "#313131",
    display: "flex",
    transform: "rotateY(0deg)",
    transition: ".5s all ease",
    zIndex: 400,
  },
  fun: {
    transform: "rotateY(180deg)",
    transition: ".5s all ease",
    zIndex: 400,
  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "125px !important",
      position: "absolute",
      marginTop: "20px !important",
    },
  },
  image: {
    marginBottom: (props) => (props.isbackOfCardVisible ? "-30px" : "-65px"),
    marginTop: (props) => (props.isbackOfCardVisible ? "90px" : "45px"),
    width: "45%",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Home = (props) => {
 
  const pathname = props?.location?.pathname;
  const [isMenuOpen, setMenuOpen] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState([])
  const [isbackOfCardVisible, SetBackOfCardVisibility] = useState(false);
  const classes = useStyle();

   return (
    <div className={classes.container}>
      <div
        className={classNames(classes.innerContainer, {
          [classes.fun]: isbackOfCardVisible,
        })}
      >
        <VerticalNavBar
          isbackOfCardVisible={isbackOfCardVisible}
          pathname={pathname}
        />
        <Hidden xsDown>
          <Image
            style={{
              marginBottom: isbackOfCardVisible ? "-30px" : "-65px",
              marginTop: isbackOfCardVisible ? "-30px" : "90px",
              width: isbackOfCardVisible ? "85%" : "45%",
            }}
            isbackOfCardVisible={isbackOfCardVisible}
            class={classes.imageContainer}
            src={elonMusk}
            isHover={true}
          />
        </Hidden>
        <Profile isbackOfCardVisible={isbackOfCardVisible} />
      </div>
      <ArrowBox onClick={SetBackOfCardVisibility} />
    </div>
  );
};

export default withRouter(Home);
