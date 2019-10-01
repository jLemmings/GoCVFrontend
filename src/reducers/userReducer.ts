import {Action} from "../actions";
import {User} from "../model/user";

export interface AccessUser {
    isFetching: boolean
    user?: User
}

export interface State {
    user: User
}

export const userReducer = (state: AccessUser = {isFetching: false}, action: Action): AccessUser => {
    switch (action.type) {
        case "SET":
            return {...state, user: action.user};
        case "SET_FETCHING":
            return {...state, isFetching: action.isFetching};
        default:{
            return state
        }
    }
};

