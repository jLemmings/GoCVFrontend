import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";


export const EducationContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    return (
        <div>
            <h1>Hello</h1>
            <h1>{user.LastName}</h1>
            <h1>{user.GithubProfile}</h1>
            <h1>{user.FirstName}</h1>
        </div>
    )
}
