import React from "react";
import { makeStyles } from "@material-ui/core";
import Image from "./image";
import facebook from "../Assets/Images/facebook-icon.png";

const useStyle = makeStyles(() => ({
  mediaContainer: {
    display: "flex",
  },
}));

const SocialMediaLink = () => {
  const classes = useStyle();
  return (
    <div className={classes.mediaContainer}>
      <Image
        src={facebook}
        style={{ height: "35px", width: "35px" }}
        isHover={true}
      />
      <Image
        src={facebook}
        style={{ height: "35px", width: "35px", marginLeft: "20px" }}
        isHover={true}
      />
      <Image
        src={facebook}
        style={{ height: "35px", width: "35px", marginLeft: "20px" }}
        isHover={true}
      />
    </div>
  );
};

export default SocialMediaLink;
