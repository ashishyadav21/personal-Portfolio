import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyle = makeStyles(() => ({
  image: {
    filter: (props) =>
      props.isbackOfCardVisible && "drop-shadow(10px 10px 15px gray)",
    transform: (props) =>
      props.isbackOfCardVisible && "rotate( -5deg) scale(1) translateY(10px)",
    "&:hover": {
      transform: "rotate( -5deg) scale(1) translateY(10px)",
      transition: ".5s all ease",
      zIndex: 400,
      filter: "drop-shadow(10px 10px 15px gray)",

      //   transition: "all 200ms cubic-bezier(0.42, 0, 0.58, 1)",
      //   // -webkit-transform: rotateX(-4.010704565915763deg) rotateY(42.398876839680916deg)   ;
      //   transform:
      //     "rotateX(-4.010704565915763deg) rotateY(42.398876839680916deg)",
    },
  },
}));

const Image = (props) => {
  const classes = useStyle(props);
  return (
    <img
      className={classNames(props.class, {
        [classes.image]: props.isHover,
      })}
      style={props.style}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Image;
