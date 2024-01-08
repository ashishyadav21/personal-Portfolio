import React, { useRef } from "react";
import VerticalNavBar from "../../component/vertical-navbar";
import { makeStyles, Button, Hidden } from "@material-ui/core";
import programmerInfo from "../../Assets/Images/programer-info.png";
import nerd from "../../Assets/Images/nerd.png";
import javascript from "../../Assets/Images/javascript-39400.png";
import goLang from "../../Assets/Images/go-lang.png";
import html5 from "../../Assets/Images/html-5.png";
import postgresql from "../../Assets/Images/transparent-postgresql.png";
import css from "../../Assets/Images/css-3.png";
import android from "../../Assets/Images/android.png";
import lightning from "../../Assets/Images/lightning.png";
import react from "../../Assets/Images/react-icon.png";
import telephone from "../../Assets/Images/telephone-call.png";
import gmail from "../../Assets/Images/gmail.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import { useHistory } from "react-router-dom";
import  {useTheme}  from '@mui/material/styles';


import { myQualties } from "../About/about-career";
import LinearProgressWithLabel from "../../component/linearProgress/linear-progress";

import { Zoom, Fade } from "react-reveal";

const useStyle = makeStyles((theme) => ({
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
  introContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row-reverse',
    padding: "30px 50px",
    position: "relative",
    flex:1,
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      justifyContent: 'flex-end',
      alignItems:'center'
    }
  },
  imageContainer: {
    flex: "1",
    width: "500px",
    height: "400px",
    [theme.breakpoints.down('xs')]:{
      width:'250px',
      height: '250px',
      margin:'auto'
    }
  },
  firstImage: {},
  programmerInfoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  buttonContainer: {
    display: "flex",
    margin: "2rem 0 0",
  },
  buttonRoot: {
    backgroundColor: "#f1d34d",
    marginRight: "15px",
    "&:hover": {
      backgroundColor: "#e4ce68",
      borderColor: "#0062cc",
      boxShadow: "0 0 0 0.2rem #d2cccc",
      color: "white",
    },
  },
  "@keyframes moving": {
    from: { top: "50px" },
    to: { top: "100px" },
  },
  heading: {
    fontSize: "45px",
    "&:hover": {
      animation: "$moving 3000ms infinite",
    },
  },
  secondContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 50px",
    [theme.breakpoints.down('xs')]:{
      display: 'block'
    }
   },
   
  skilContainer: {
    alignItems:'center',
    padding: "30px 50px",
    "& img": {
      width: "50px",
      height: "50px",
      marginLeft: "17px",
      [theme.breakpoints.down('xs')]:{
        width: "30px",
        height: "30px",
      }
    },
  },
  progressContainer:{
    width: '60%',
    [theme.breakpoints.down('xs')]:{
      width:'100%'
    }
  },
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 50px",
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down['xs']]: {
      flexDirection:'column'
    } 
  },
  projectList:{
    display:'flex',
    flexDirection:'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column'
    } 
  },
  languageIntro: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },
  languageContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap:'nowrap',
    [theme.breakpoints.down('xs')]:{
      flexWrap:'wrap',
      justifyContent:'flex-start'
    },
    "& img": {
      width: "50px",
      height: "50px",
      margin: "8px",
      filter: "grayscale(1)",
      "&:hover": {
        filter: "grayscale(0)",
      },
    },
  },
  langaugeImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "10px 15px",
    "& img": {
      marginBottom: "8px",
    },
    "& text": {
      fontSize: "14px",
    },
  },
  qualitiesContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "25px 20px",
    "&>div": {
      alignItems: "center",
      display: "flex",
      marginBottom: "15px",
      [theme.breakpoints.down('xs')]:{
        marginBottom: "0px",
      }
    },
    "& img": {
      width: "30px",
      height: "30px",
      marginRight: "30px",
      [theme.breakpoints.down('xs')]:{
        marginRight: "15px",
      }
    },
    "& text": {
      fontSize: "18px",
      color: "#868e96",
      [theme.breakpoints.down('xs')]:{
        padding: '20px 10px',
        fontSize: '15px'
      }
    },
    [theme.breakpoints.down('xs')]:{
      padding: '20px 10px',
     }
  },
  thunder: {},
  skillHeader: {
    fontSize: "45px",
    fontWeight: 700,
  },
  root: {
    height: "12px",
    borderRadius: "4px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "20px 20px",
    textDecoration:'none',
    "&:hover": {
      transform: "rotate(-10deg)",
    },
  },
  card: {
    width: "240px",
    height: "254px",
    alignItems: "center",
    display:'flex',
    justifyContent:'center',
    fontWeight:'400',
    flexDirection: 'column',
    boxSizing: 'border-box',
    background: 'rgba(217, 217, 217, 0.58)',
    border: '1px solid white',
    boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
    backdropFilter: 'blur(6px)',
    borderRadius: '17px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.5s',
    userSelect: 'none',
    color: 'black',
    "& img": {
      width: "30%",
      height: "30%",
      marginBottom: "10px",
      [theme.breakpoints.down('xs')]:{
        flexDirection: 'column',
      }
    },
    "&:hover": {
      filter: "drop-shadow(2px 4px 6px #f1d34d)",
      border: '1px solid black',
      transform: 'scale(1.05)',
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "50px",
    '& img':{
      width: "50px",
      marginLeft: "40px",
      height: "50px",
      [theme.breakpoints.down('xs')]:{
        width: "30px",
        height: "30px",
      }
    }
  },

  contactInfo: {
    display: "flex",
    alignItems: "center",
    '& text' : {
      fontSize: '55px',
      [theme.breakpoints.down('xs')]:{
        fontSize: '35px'
      }
    }
  },
  socialContainer: {
    padding: "20px 20px",
  },
  selfDescription:{
    display:'flex',
    flexDirection:'column',
    marginTop:'2rem',
    flex:'1',
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center'
    }
  }
}));

const AboutMe = (props) => {
  const theme = useTheme()
  const classes = useStyle(theme);
  const history = useHistory();
  const contactRef = useRef(null);

  const pathname = props?.location?.pathname;

  const scrollToDiv = () => {
    !!contactRef && contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.nvaBarContainer}>
        <VerticalNavBar pathname={pathname}/>
      </div>
  
      <div className={classes.introContainer}>
       <Fade left big>
          <div className={classes.imageContainer}>
            <img
              src={programmerInfo}
              className={classes.programmerInfoImage}
              alt="programmer-info"
            />
          </div>
        </Fade>
        <div className={classes.selfDescription}>
          <Zoom>
            <div>
              <h1 className={classes.heading}>Hello there, I am Ashish</h1>
            </div>
          </Zoom>
          <text style={{ fontSize: "24px", color: "#868e96" }}>
            Passionate Web and Mobile App Developer having an experience of
            building Web and Mobile Application with Javascript / React Js /
            NodeJs / React Native and some other cool liberaries and framework.
          </text>
          <div className={classes.buttonContainer}>
            <Button
              classes={{
                root: classes.buttonRoot
              }}
              onClick={() => scrollToDiv()}
            >
              Contact Me
            </Button>
            <Button
              classes={{
                root: classes.buttonRoot, // class name, e.g. `classes-nesting-root-x`
              }}
              onClick={() => history.push("/resume")}
            >
              See Resume
            </Button>
          </div>
        </div>
      
      </div>
      <div className={classes.secondContainer}>
        <Hidden xs>
        <Fade right>
          <div className={classes.imageContainer}>
            <img
              src={nerd}
              className={classes.programmerInfoImage}
              alt="programmer-info"
            />
          </div>
        </Fade>
        </Hidden>
       
        <div className={classes.languageIntro}>
          <text className={classes.heading} style={{ padding: "10px 20px" }}>
            What I do
          </text>
          <span style={{ padding: "10px 20px", color: "#868e96" }}>
            A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </span>
          <div className={classes.languageContainer}>
            <div className={classes.langaugeImageContainer}>
              <img
                src={html5}
                className={classes.programmerInfoImage}
                alt="html-5"
              />
              <text>HTML-5</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={javascript}
                className={classes.programmerInfoImage}
                alt="javascript"
              />
              <text>JavaScript</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={goLang}
                className={classes.programmerInfoImage}
                alt="golang"
              />
              <text>GoLang</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={postgresql}
                className={classes.programmerInfoImage}
                alt="postgres"
              />
              <text>PostgreSQL</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={css}
                className={classes.programmerInfoImage}
                alt="css"
              />
              <text>CSS</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={react}
                className={classes.programmerInfoImage}
                alt="react"
              />
              <text>ReactJs</text>
            </div>
            <div className={classes.langaugeImageContainer}>
              <img
                src={android}
                className={classes.programmerInfoImage}
                alt="android"
              />
              <text>Android</text>
            </div>
          </div>
          <div className={classes.qualitiesContainer}>
            {!!myQualties &&
              myQualties.map((qualty, index) => (
                <div>
                  <img src={lightning} alt="lighting" />
                  <text>{qualty.text}</text>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={classes.skilContainer}>
        <Fade bottom>
          <div>
            <text className={classes.skillHeader}>Proficiency </text>
            <img src={lightning} alt="lighting" />
          </div>

          <div className={classes.progressContainer}>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                Java
              </text>
              <LinearProgressWithLabel value={"90"} classes={classes} />
            </div>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                JavaScript
              </text>
              <LinearProgressWithLabel value={"60"} classes={classes} />
            </div>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                GoLang
              </text>
              <LinearProgressWithLabel value={"70"} classes={classes} />
            </div>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                React
              </text>
              <LinearProgressWithLabel value={"70"} classes={classes} />
            </div>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                PostgreSQL
              </text>
              <LinearProgressWithLabel value={"60"} classes={classes} />
            </div>
            <div style={{ padding: "10px 15px" }}>
              <text style={{ fontSize: "22px", marginBottom: "5px" }}>
                HTML/CSS
              </text>
              <LinearProgressWithLabel value={"70"} classes={classes} />
            </div>
          </div>
        </Fade>
      </div>
      <div className={classes.projectContainer}>
        <text style={{ fontSize: "45px" }}>Project</text>
        <div className={classes.projectList}>
          <Fade bottom big opposite>
            <a
              className={classes.cardContainer}
              href="https://www.permitdocs.com/'"
            >
              <div className={classes.card}>
                <img
                  src="https://permitdocs.s3.amazonaws.com/Assets/logo.svg"
                  alt="project"
                />
                <text style={{ marginTop: "10px" }}>PermitDocs App</text>
              </div>
            </a>
          </Fade>
          <Fade top big opposite>
            <a
              className={classes.cardContainer}
              href="https://construction.autodesk.com/"
              target="_blank" rel="noreferrer"
            >
              <div className={classes.card}>
                <img src={react} alt="project" />
                <text style={{ marginTop: "10px" }}>
                  Autodesk Construction Cloud
                </text>
              </div>
            </a>
          </Fade>
          <Fade bottom big opposite>
            <a
              className={classes.cardContainer}
              href="https://www.bisk.com/"
              target="_blank" rel="noreferrer"
            >
              <div className={classes.card}>
                <img src={react} alt="project" />
                <text style={{ marginTop: "10px" }}>Bisk</text>
              </div>
            </a>
          </Fade>
          <Fade top big opposite>
            <a
              className={classes.cardContainer}
              href="https://www.zilliant.com/"
              target="_blank" rel="noreferrer"
            >
              <div className={classes.card}>
                <img
                  src="https://www.zilliant.com/wp-content/uploads/2020/02/logo-dark.svg"
                  alt="project"
                  objectFit="contain"
                />
                <text style={{ marginTop: "10px" }}>Zilliant</text>
              </div>
            </a>
          </Fade>
        </div>
      </div>
      <div className={classes.contactContainer} ref={contactRef}>
        <div className={classes.contactInfo}>
          <text>Contact Me</text>
          <img
            src={telephone}
            alt="telephone"
          />
        </div>
        <text style={{ marginTop: "20px", color: "#868e96" }}>
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </text>
        <div className={classes.socialContainer}>
          <img src={gmail} alt="telephone" />
          <img
            src={whatsapp}
            alt="telephone"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
