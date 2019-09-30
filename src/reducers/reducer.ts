import {DELETE_USER, SEND_USER, UserActionTypes, UserState} from "../model/user";

const initialState: UserState = {
    users: []
};

export function userReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case SEND_USER:
            return {
                users: [...state.users, action.payload]
            };
        case DELETE_USER:
            return {
                users: state.users.filter(
                    user => user.ID !== action.meta.id
                )
            };
        default:
            return state
    }
}
