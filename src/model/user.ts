import {Project} from "./project";
import {Experience} from "./experience";
import {Education} from "./education";

export interface User {
    ID: string;
    ProfileImageURL: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Bio: string;
    GithubProfile: string;
    Experience: Experience[];
    Education: Education[];
    Projects: Project[];
}

export const GET_USER = "GET_USER";

export interface UserState {
    user: User;
}

export interface GetUserAction {
    type: typeof GET_USER
}


export type UserActionTypes = GetUserAction
