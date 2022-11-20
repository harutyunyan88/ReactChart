import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { setChartData } from "./chartData/action";


export function* rootSaga() {
  yield takeEvery("getChartData", getChartData);
}

function* getChartData() {
  const {data} = yield axios.get('http://82.202.204.94/tmp/test.php')
  yield put(setChartData(data))
}
