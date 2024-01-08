import { combineReducers } from "redux";

import * as user from "../src/Auth/authReducer";
import * as company from "../src/component/company";

const reducer = combineReducers({
  [user.name]: user.reducer,
  [company.name]: company.reducer,
});

export default reducer;
