export type User = {
    ID: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Bio: string;
    GithubProfile: string;
    Experience: Experience;
    Education: Education;
};

export const SEND_USER = 'SEND_USER';
export const DELETE_USER = 'DELETE_USER';

export interface UserState {
    users: User[];
}

interface SendUserAction {
    type: typeof SEND_USER
    payload: User
}

interface DeleteUserAction {
    type: typeof DELETE_USER
    meta: {
        id: string
    }
}

export type UserActionTypes = SendUserAction | DeleteUserAction
