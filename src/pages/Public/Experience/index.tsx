import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";
import {ExperienceContent} from "./ExperienceContent";

const {Content} = Layout;

export default class ExperienceComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <ExperienceContent/>
            </Content>
        );
    }
}

export const Experience = (ExperienceComponent);
