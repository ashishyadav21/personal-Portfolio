import React from "react";
import { makeStyles } from "@material-ui/core";
import Image from "./image";
import signature from "../Assets/Images/signature.png";
import SocialMediaLink from "./social-Media-links";
import classNames from "classnames";
import breakpoints from "../theme/breakpoints";
import ReactMarkdown from "react-markdown";

const useStyle = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "50px 30px",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 30px",
      marginLeft: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px !important",
      marginLeft: "0% !important",
    },
  },
  seprator: {
    borderTop: "6px solid #E5A83B",
    width: "60%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    textAlign: "left",
    fontSize: "40px",
    color: "#ffffff",
    paddingTop: "30px",
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: "15px",
    // },
  },
  job: {
    textAlign: "left",
    fontSize: "15px",
    color: "#b7aeae",
    paddingTop: "10px",
    letterSpacing: "4px",
  },
  description: {
    textAlign: "left",
    fontSize: "14px",
    color: "#b7aeae",
    paddingTop: "20px",
    letterSpacing: "0px",
  },
  flip: {
    transform: "scale(-1, 1)",
  },
}));

const profileInfo = `<p>Hi, I am Ashish Yadav</p>
<p><br></p>
<p>I am a software developer having 4 years of total experience.&nbsp;</p>
<p>Currently working as a Project Manager in Innostax software Labs.<br><br><br></p>
<p>Worked on many languages, but having a strong hand in <strong>ReactJs, Redux,&nbsp;</strong>and <strong>Golang.</strong><br><br><br>Consulted more than 20 projects for many companies. <br>Always Ready to help.&nbsp;</p>
<p><br></p>
<p></p>
<p><br></p>`;

const Profile = (props) => {
  const classes = useStyle(breakpoints);
  return (
    <div
      className={classNames(classes.profileContainer, {
        [classes.flip]: props.isbackOfCardVisible,
      })}
    >
      {!props.isbackOfCardVisible ? (
        <>
          <div className={classes.seprator}></div>
          <div className={classes.textContainer}>
            <text className={classes.name}>Elon Musk</text>
            <text className={classes.job}>CEO/Tesla</text>
            <text className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </text>
            <Image
              src={signature}
              style={{ width: "80%", padding: "12px 0px", height: "35%" }}
            />
            <SocialMediaLink />
          </div>
        </>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: profileInfo,
          }}
          style={{ color: "white" }}
        />
      )}
    </div>
  );
};

export default Profile;
