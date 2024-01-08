import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import breakpoints from "../theme/breakpoints";

const useStyle = makeStyles((props) => (
  {
  boxContainer: {
    height: "90px",
    width: "40px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E5A83B",
    bottom: "0px",
    position: "absolute",
    top: "70%",
    marginLeft: "75%",
    zIndex: "400",
    [props.breakpoints.down("sm")]: {
      marginLeft: "78%",
    },
    [props.breakpoints.down("xs")]: {
      marginLeft: "80% !important",
    },
  },
  iconContainerFirst: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    boxShadow: (props) => props.defaultArrowSelected ? "inset 5px 5px 9px #0f0606" : "none",
    outline: "none",
    backgroundColor: (props) => props.defaultArrowSelected ? "#E5A83B" : "#4a4545"
  },

  iconContainerFirst2: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    boxShadow: (props) => props.defaultArrowSelected ? "none" : "inset 5px 5px 9px #0f0606",
    outline: "none",
    backgroundColor: (props) => props.defaultArrowSelected ? "#4a4545" : "#E5A83B"
  },
}));

const ArrowBox = (props) => {
  const [defaultArrowSelected, setDefaultArrowSelected] = useState(true)
  const classes = useStyle({
    ...props,
    defaultArrowSelected,
    breakpoints
  });

  const onArrowBoxClickHandler = (value) => {
    props.onClick(!value)
    setDefaultArrowSelected(value)
   }

  return (
    <div className={classes.boxContainer}>
      <div className={classes.iconContainerFirst}
        onClick={() => onArrowBoxClickHandler(true)}
      >
        <ArrowRightAltOutlinedIcon
          disabled={true}
        />
      </div>
      <div className={classes.iconContainerFirst2}
        onClick={() => onArrowBoxClickHandler(false)}
      >
        <ArrowRightAltOutlinedIcon
          style={{ transform: "scale(-1)" }}
        />
      </div>
    </div>
  );
};

export default ArrowBox;
