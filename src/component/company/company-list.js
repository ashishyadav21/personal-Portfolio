import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { actions } from "../company/company.slice";

const useStyle = makeStyles(() => ({
  listContainer: {
    height: "40px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    padding: "15px 20px",
    cursor: "pointer",
    "&:hover": {
      "&>span": {
        color: "#2F4F4F",
        fontSize: "16px",
      },
      // filter: "drop-shadow(10px 10px 15px gray)",

      // boxSizing: "content-box",
      // height: "60px",
      // border: "2px solid rgba(0,150,255,0.91)",
      // color: "#9a9a9a",
      // textAlign: "center",
      // transform:
      //   "rotateX(19.48056503444799deg) rotateY(-26.92901637114869deg)  translateX(80px) translateY(70px)",
    },
  },
  company: {
    fontSize: "1rem",
    color: "#727275",
  },
  jobProfile: {
    fontSize: "0.9rem",
    color: "#000000",
  },
  seprator: {
    borderBottom: "2px solid #727275",
    marginTop: "10px",
  },
  topSeprator: {
    borderTop: "1px solid #727275",
    marginTop: "10px",
  },
}));

const CompanyList = (props) => {
  console.log("props -->", props);
  const classes = useStyle();

  console.log(props);
  useEffect(() => {
    dispatch(companyProjects(props.data));
  }, [props]);

  const { companyProjects } = actions;
  const dispatch = useDispatch();

  const onhandleClick = () => {
    console.log("props.forwardedRef -->", props.forwardedRef);
    // window.scrollTo(0, props.forwardedRef.current.offsetTop);
    // props.forwardedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={classes.listContainer}
      onClick={() => {
        dispatch(companyProjects(props.data));
        onhandleClick();
      }}
    >
      <span className={classes.company}> {props.data.company}</span>
      <span className={classes.jobProfile}>{props.data.JobProfile}</span>
      <div className={classes.seprator}></div>
      {/* Need to create a seprator component and use the styling using props */}
    </div>
  );
};

export default CompanyList;
