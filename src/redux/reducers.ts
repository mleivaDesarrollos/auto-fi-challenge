import { combineReducers } from "redux";
import { reducer as main } from "./main/slice";

const reducers = combineReducers({
  main,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
