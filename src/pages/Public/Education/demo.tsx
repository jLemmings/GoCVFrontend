import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";

export const Demo = () => {
    const isLoaded: boolean = useSelector((state: State) => state.userProfile.isLoaded);
    const isFetching: boolean = useSelector((state: State) => state.userProfile.isFetching);
    const user: User = useSelector((state: State) => state.userProfile.user);
    console.log(isLoaded);
    console.log(isFetching);
    console.log(user);
    return (
        <div>
            <h1>Hello</h1>
            <h1>{user.LastName}</h1>
            <h1>{user.GithubProfile}</h1>
            <h1>{user.FirstName}</h1>
        </div>
    )
}
