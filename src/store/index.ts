import thunkMiddleware from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../reducers";

export default function configureStore(preloadedState?: any) {
    const middleware = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(...enhancers) : compose(middlewareEnhancer);
    return createStore(rootReducer, preloadedState, composedEnhancers)
}
