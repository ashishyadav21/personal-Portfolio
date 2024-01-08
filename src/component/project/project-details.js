import React, { useRef } from "react";
import { makeStyles, Chip, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    // textAlign: "left",
    padding: "0px 20px",
    backgroundColor: "#ffffff",
    height: "100vh",
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
  root: {
    color: "#000000",
    border: "2px solid #9a9a9a",
    // "&:hover": {
    //   // -webkit-box-sizing: content-box;
    //   // -moz-box-sizing: content-box;
    //   boxSizing: "content-box",
    //   width: "150px",
    //   height: "100px",
    //   border: "2px solid rgba(0,150,255,0.91)",
    //   // font: "normal 16px/1 "Times New Roman", Times, serif",
    //   //   color: rgba(255, 255, 255, 1),
    //   textAlign: "center",
    //   textOverflow: "ellipsis",
    //   transform:
    //     "rotateX(-16.615776058793873deg) rotateY(33.231552117587746deg)  translateX(80px) translateY(70px)",
    // },
  },
  imageContainer: {
    position: "absolute",
    right: "0",
    top: "-7%",
  },
}));

const ProjectDetails = (props) => {
  const { projectInfo } = props;
  const classes = useStyles();

  return (
    <div style={{ overflowY: "scroll" }}>
            {/* <div className={classes.imageContainer}>

       <img
          src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397189367/9992bfb0c23f6d9a0091d99938fc886e.gif"
          alt="companyLogo"
        />
        </div> */}
      {!!projectInfo &&
        projectInfo.map((projectInfo, index) => (
          <div className={classes.innerContainer}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {!!projectInfo && (
                  <h4 style={{ display: "flex" }}>
                    {projectInfo.projectTitle}
                  </h4>
                )}
                <a
                  style={{ margin: "10px" }}
                  target="_blank"
                  href="https://www.g2.com" rel="noreferrer"
                >
                  (Live Preview)
                </a>
              </div>

              {!!projectInfo && (
                <text style={{ display: "flex", justifyContent: "flex-end" }}>
                  Project Type : {projectInfo.projectType}
                </text>
              )}
              {!!projectInfo && (
                <text style={{ display: "flex", justifyContent: "flex-end" }}>
                  Project Duration : {projectInfo.projectDuration}
                </text>
              )}
            </div>

            <div className={classes.projectInfo}>
              {/* <img
                src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397189367/9992bfb0c23f6d9a0091d99938fc886e.gif"
                alt="companyLogo"
                style={{ width: "150px" }}
              /> */}
              <h5 style={{ zIndex: 1 }}>
                {!!projectInfo && projectInfo.projectDescription}
              </h5>
            </div>
            {!!projectInfo && (
              <text style={{ display: "flex", justifyContent: "flex-end" }}>
                Role : {projectInfo.projectRole}
              </text>
            )}
            {!!projectInfo && (
              <text style={{ display: "flex", justifyContent: "flex-end" }}>
                Team Size : {projectInfo.TeamSize}
              </text>
            )}

            <text style={{ display: "flex", padding: "25px 30px" }}>
              Technology Used in this Project :
            </text>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              {!!projectInfo &&
                projectInfo.TechnologyUsed.map((_technology) => (
                  <Chip
                    variant="default"
                    size="medium"
                    label={_technology.name}
                    clickable
                    color="default"
                    avatar={
                      <Avatar alt="Natacha" src={_technology.language.icon} />
                    }
                    classes={{
                      root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                ))}
            </div>
            <div style={{ border: "2px solid #9a9a9a", margin: "10px" }} />
          </div>
        ))}
    </div>
  );
};

export default ProjectDetails;
