import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import LinearProgressWithLabel from "../../component/linearProgress/linear-progress";

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: "red",
    color: "black",
  },
  primaryColor: {
    color: "blue",
    backgroundColor: "darkgray",
  },
  oppositeContent: {
    fontSize: "!2px",
  },
}));

// function LinearProgressWithLabel(props) {
//   console.log("props- -> liner -->", props);
//   const className = props.rootClass;
//   return (
//     <Box display="flex" alignItems="center">
//       <Box width="100%" mr={1}>
//         <LinearProgress
//           variant="determinate"
//           {...props}
//           classes={{
//             root: props?.rootClass?.root,
//             barColorPrimary: props?.rootClass?.root,
//             colorPrimary: props?.rootClass?.primaryColor, // class name, e.g. `classes-nesting-root-x`
//           }}
//         />
//       </Box>
//       <Box minWidth={35}>
//         <Typography variant="body2" color="textSecondary">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

const AboutMe = () => {
  const classes = useStyle();
  return (
    <div
      style={{
        backgroundColor: "#E5A83B",
      }}
    >
      <div
        style={{
          textAlign: "left",
          padding: "20px 20px",
        }}
      >
        <text>About</text>
        <div
          style={{
            border: "2px solid gray",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </text>
      </div>
      <div style={{ textAlign: "left", padding: "20px 20px" }}>
        <text>Basic Info</text>
        <div
          style={{
            border: "2px solid gray",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
        <div>
          <h5 style={{ margin: "0px" }}>Birthday : 21 Apr 2021</h5>
          <h5 style={{ margin: "0px" }}>Phone : 89898989829</h5>
          <h5 style={{ margin: "0px" }}>Email : a.yadavashish21@gmail.com</h5>
          <h5 style={{ margin: "0px" }}>HomeTown : Bahadurgarh, Haryana</h5>
        </div>
      </div>
      <div style={{ textAlign: "left", padding: "20px 20px" }}>
        <text>Professional Skills</text>
        <div
          style={{
            border: "2px solid gray",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", fontSize: "14px" }}>JavaScript</div>
            <div style={{ flex: "2" }}>
              <LinearProgressWithLabel value={"70"} rootClass={classes} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", fontSize: "14px" }}>ReactJS</div>
            <div style={{ flex: "2" }}>
              <LinearProgressWithLabel value={"70"} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", fontSize: "14px" }}>HTML/CSS</div>
            <div style={{ flex: "2" }}>
              <LinearProgressWithLabel value={"60"} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", fontSize: "14px" }}>GoLang</div>
            <div style={{ flex: "2" }}>
              <LinearProgressWithLabel value={"70"} />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1", fontSize: "14px" }}>PostgreSQL</div>
            <div style={{ flex: "2" }}>
              <LinearProgressWithLabel value={"60"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
