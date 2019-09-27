import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class SkillsComponent extends React.Component {

    public render() {
        return (
            <Content className="component">
                <p>Skills</p>
            </Content>
        );
    }
}

export const Skills = (SkillsComponent);
