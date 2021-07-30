import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const { run: runSaga } = sagaMiddleware;

const store = configureStore({
  reducer,
  middleware,
});

runSaga(sagas);

export default store;
