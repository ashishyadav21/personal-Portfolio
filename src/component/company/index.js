import * as selectors from "./company.selectors";
import slice from "./company.slice";

export const { name, actions, reducer } = slice;

export const { getcompanyProjects } = selectors;
