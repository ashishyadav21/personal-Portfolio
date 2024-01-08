import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import "./register.css";
import { useDispatch } from "react-redux";
import { actions } from "../authReducer/user.slice";

const useStyle = makeStyles((theme) => ({
  imageContainer: {
    paddingTop: "40px",
    alignItems: "center",
  },
}));

const Register = (props) => {
  const classes = useStyle();

  const { userDetails } = actions;
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  const onSubmitHandler = (data) => {
    dispatch(userDetails(data));
  };

  return (
    <div>
      <div className={classes.imageContainer} />
      <div className={classes.registerContaier}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <label>First Name</label>
            <input name="firstName" ref={register} />
          </div>

          <div>
            <label>Last Name</label>
            <input name="lastName" ref={register} />
          </div>

          <div>
            <label>Email</label>
            <input name="email" type="email" ref={register} />
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
