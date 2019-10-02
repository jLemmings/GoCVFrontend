import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    userProfile: userReducer
});

export type AppState = ReturnType<typeof rootReducer>
