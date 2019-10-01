import {User} from "../model/user"
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AnyAction} from "redux";
import axios from "axios";

export interface SetUser {
    type: 'SET'
    user: User
}

export interface SetFetching {
    type: 'SET_FETCHING'
    isFetching: boolean
}

export type Action = SetUser | SetFetching

export const set = (user: User): SetUser => {
    return {type: 'SET', user: user}
};

export const isFetching = (isFetching: boolean): SetFetching => {
    return {type: 'SET_FETCHING', isFetching: isFetching}
};

export const getUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        return new Promise<void>((resolve) => {
            dispatch(isFetching(true));
            console.log('FETCHING PROFILE IN PROGRESS');
            setTimeout(() => {
                let user = new User();
                axios.get(process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID)
                    .then(response => {
                        console.log(response.data);
                        user = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });

                dispatch(set(user));
                setTimeout(() => {
                    dispatch(isFetching(false));
                    console.log('Login done');
                    resolve()
                }, 1000)
            }, 3000)
        })
    }
};
