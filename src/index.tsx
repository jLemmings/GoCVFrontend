import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import {rootReducer} from './reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
