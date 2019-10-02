import {useSelector, useStore} from "react-redux";
import React from "react";
import {AccessUser} from "../../../reducers/userReducer";

export default function EducationComponent() {
    const store: AccessUser = useStore().getState();
    console.log(store);
    const isLoaded: boolean = useSelector((state: AccessUser) => state.isLoaded);
    console.log(isLoaded);
    return (
        <p>{isLoaded}</p>
    )
}
