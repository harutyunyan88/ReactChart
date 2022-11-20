import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Chart from "./Chart/Chart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "getChartData" });
    }, 1500);
  }, []);

  return <Chart />;
}

export default App;
