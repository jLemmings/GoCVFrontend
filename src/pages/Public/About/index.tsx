import * as React from "react";
import {Layout} from "antd";
import "./about.css";
import {Component} from "react";
import {AboutContent} from "./AboutContent";

const {Content} = Layout;


export default class AboutComponent extends Component {

    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <Content className="component">
                <AboutContent/>
            </Content>
        );
    }
}

export const About = (AboutComponent);
