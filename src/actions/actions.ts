import {DELETE_USER, SEND_USER, User, UserActionTypes} from "../model/user";

export function sendUser(newUser: User): UserActionTypes {
    return {
        type: SEND_USER,
        payload: newUser
    }
}

export function deleteUser(id: string): UserActionTypes {
    return {
        type: DELETE_USER,
        meta: {
            id
        }
    }
}
