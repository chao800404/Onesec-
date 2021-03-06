/** @format */

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Main from "./main.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function init() {
  const timeout = setTimeout(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Main />
          </PersistGate>
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }, 2200);

  return () => clearTimeout(timeout);
}

init();

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
