import { chartDataReducer } from "./chartData/reducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  chartData: chartDataReducer,
});
