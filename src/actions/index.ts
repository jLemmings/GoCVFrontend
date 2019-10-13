import {User} from "../model/user"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import axios from "axios";

export interface SetUser {
    type: "SET"
    user: User
}

export interface SetFetching {
    type: "SET_FETCHING"
    isFetching: boolean
}

export interface SetLoaded {
    type: "SET_LOADED"
    isLoaded: boolean
}

export type Action = SetUser | SetFetching | SetLoaded

export const set = (user: User): SetUser => {
    return {type: "SET", user: user}
};

export const isFetching = (isFetching: boolean): SetFetching => {
    return {type: "SET_FETCHING", isFetching: isFetching}
};

export const isLoaded = (isLoaded: boolean): SetLoaded => {
    return {type: "SET_LOADED", isLoaded: isLoaded}
};

export const getUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>((resolve) => {
            dispatch(isFetching(true));
            console.log("FETCHING PROFILE IN PROGRESS, ID: ", process.env.REACT_APP_USER_ID);

            setTimeout(() => {
                let user = <User>{};
                console.log(process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID);
                axios.get(process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID)
                    .then(response => {
                        user = response.data.data;
                        dispatch(isLoaded(true));
                        dispatch(set(user));
                    })
                    .catch(error => {
                        console.log(error);
                    });
                setTimeout(() => {
                    dispatch(isFetching(false));
                    console.log("LOADED PROFILE");
                    resolve()
                }, 1000)
            }, 3000)
        })
    }
}
