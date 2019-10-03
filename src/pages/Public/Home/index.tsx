import React, {Component} from "react";
import {SideBar} from "./SideBar";


export class HomeComponent extends Component {
    public render() {
        return (
            <SideBar/>
        );
    }

}

export const Home = (HomeComponent);

