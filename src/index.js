import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./routes";
import { Provider } from "react-redux";
import { store } from "utils/redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
