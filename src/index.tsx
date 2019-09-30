import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from './store';


const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("root")
);
registerServiceWorker();
