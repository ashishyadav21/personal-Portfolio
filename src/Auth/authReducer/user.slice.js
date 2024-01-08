import { createSlice } from "@reduxjs/toolkit";
// import * as asyncActions from "./users.asyncActions";

const initialState = {
  userDetails: null,
};

const slice = createSlice({ 
  name: "users",
  initialState,
  reducers: {
    userDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
  //   extraReducers: {
  //     [asyncActions.signIn.fulfilled]: (_, action) => action.payload,
  //   },
});

export default slice;

export const { name, actions, reducer } = slice;
