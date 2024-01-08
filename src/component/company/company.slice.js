import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyProjects: null,
};

const slice = createSlice({
  name: "company",
  initialState,
  reducers: {
    companyProjects(state, action) {
      state.companyProjects = action.payload;
    },
  },
});

export const getCompanyDetails = (state) => state.company;

export default slice;

export const { name, actions, reducer } = slice;
