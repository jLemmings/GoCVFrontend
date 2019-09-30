import {combineReducers} from "redux";
import {userReducer} from "../reducers/reducer";

export const rootReducer = combineReducers({
    user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>
