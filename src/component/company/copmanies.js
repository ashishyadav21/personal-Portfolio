import React from "react";
import { makeStyles } from "@material-ui/core";
import { companyData } from "./company-data";
import CompanyList from "./company-list";

const useStyle = makeStyles(() => ({}));

const Companies = (props) => {
  const classes = useStyle();
  return (
    <div>
      <h3 style={{ textAlign: "left", padding: "0px 20px" }}>
        On The Job Board
      </h3>

      {companyData.map((c_data) => (
        <CompanyList data={c_data} forwardedRef={props.forwardedRef} />
      ))}
    </div>
  );
};

export default Companies;
