import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Mount function to start the App

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// To Handle Isolation

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// To handle Render by Container

export { mount };
