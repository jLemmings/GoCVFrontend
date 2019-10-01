import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class ExperienceComponent extends React.Component {

    public render() {
        return (
            <Content className="component">
                <p>Experience</p>
            </Content>
        );
    }
}

export const Experience = (ExperienceComponent);
