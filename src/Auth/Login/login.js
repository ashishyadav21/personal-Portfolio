import React from "react";
import { makeStyles } from "@material-ui/styles";

const Login = () => {
  return (
    <div>
      <div>
        <input placeholder="email" />
        <input placeholder="password" />
      </div>
      <button>submit</button>
    </div>
  );
};

export default Login;
