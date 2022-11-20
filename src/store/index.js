import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers";
import { rootSaga } from "./saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
export const myStore = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
