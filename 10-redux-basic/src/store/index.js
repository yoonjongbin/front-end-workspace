// 루트 리듀서 만들기

import { combineReducers } from "redux";
import counter from "./modules/counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
