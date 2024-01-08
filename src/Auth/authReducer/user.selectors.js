import slice from "./user.slice";

export const selectSlice = (state) => state[slice.name];

export const selectUserDetail = (state) => selectSlice(state).userDetails;
