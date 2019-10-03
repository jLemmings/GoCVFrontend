import {Action} from "../actions";
import {User} from "../model/user";

export interface AccessUser {
    isLoaded: boolean
    isFetching: boolean
    user: User
}

export const userReducer = (
    state: AccessUser = {
        isLoaded: false,
        isFetching: false,
        user: <User>{
            FirstName: "Derp",
            LastName: "Herp",
            Email: "derp@jerp.ch",
            Bio: "HIRE ME",
            GithubProfile: "jLemmings",
        }
    }, action: Action): AccessUser => {
    switch (action.type) {
        case "SET":
            return {...state, user: action.user};
        case "SET_FETCHING":
            return {...state, isFetching: action.isFetching};
        case "SET_LOADED":
            return {...state, isLoaded: action.isLoaded};
        default: {
            return state
        }
    }
};

