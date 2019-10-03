import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";

const {Content} = Layout;

export default class SkillsComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <p>Skills</p>
            </Content>
        );
    }
}

export const Skills = (SkillsComponent);
