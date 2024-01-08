import * as selectors from "./user.selectors";
// import * as asyncActions from "./user.asyncActions";
import slice from "./user.slice";

export const {
  name,
  actions: { updateFilter },
  reducer,
} = slice;

// export const { fetchAllDemo } = asyncActions;÷

// we prefix all selectors with the the "select" prefix
// export const { selectAllDemo, selectDemoFilter } = selectors;

// we export the component most likely to be desired by default
