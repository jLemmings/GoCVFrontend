import {Action} from "../actions";
import {User} from "../model/user";

export interface AccessUser {
    isLoaded: boolean
    isFetching: boolean
    user: User
}

export interface State {
    user: AccessUser;
}

export const userReducer = (state: AccessUser = {isLoaded: false, isFetching: false, user:  <User>{}}, action: Action): AccessUser => {
    switch (action.type) {
        case "SET":
            return {...state, user: action.user};
        case "SET_FETCHING":
            return {...state, isFetching: action.isFetching};
        case "SET_LOADED":
            return {...state, isLoaded: action.isLoaded};
        default:{
            return state
        }
    }
};

