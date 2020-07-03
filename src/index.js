import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppMaterial from "./AppMaterial";
import * as serviceWorker from "./serviceWorker";
import "./fonts/NotoSans-Regular.ttf";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux";
import reducer from "../src/store/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <AppMaterial />
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister();
