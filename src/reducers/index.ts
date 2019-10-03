import {combineReducers} from "redux";
import {AccessUser, userReducer} from "./userReducer";

export interface State {
    userProfile: AccessUser;
}

export const rootReducer = combineReducers({
    userProfile: userReducer
});

export type AppState = ReturnType<typeof rootReducer>
