import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";

const {Content} = Layout;

export default class ExperienceComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <p>Experience</p>
            </Content>
        );
    }
}

export const Experience = (ExperienceComponent);
