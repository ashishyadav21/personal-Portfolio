import slice from "./company.slice";

console.log("slice -->", slice);
export const selectSlice = (state) => state[slice.name];

export const getcompanyProjects = (state) => selectSlice(state).companyProjects;
