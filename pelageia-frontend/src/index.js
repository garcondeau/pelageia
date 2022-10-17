import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FluentProvider } from "@fluentui/react-components";
import { defaultLightTheme } from "./utils/theme.ts";

ReactDOM.render(
  <React.StrictMode>
    <FluentProvider theme={defaultLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
