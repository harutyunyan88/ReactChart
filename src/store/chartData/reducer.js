import { chartState } from "./state";

export const chartDataReducer = (state = chartState, action) => {
  switch (action.type) {
    case "Set_Chart_Data":
      state.data = action.payload;
    default:
      break;
  }
  return { ...state };
};
