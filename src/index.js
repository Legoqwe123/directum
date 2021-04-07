/* eslint-disable filenames/no-index */
import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import "./index.css"

import React from "react"
import ReactDOM from "react-dom"

import { App } from "./app"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root"),
)
