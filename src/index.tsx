import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import HttpClient from "util/httpClient";
import { API_URL } from "defaults/constants";
import store from "redux/store";
import "./index.css";

HttpClient.create(API_URL);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
