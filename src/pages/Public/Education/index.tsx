import * as React from "react";
import {Layout} from "antd";
import {Demo} from "./demo";
import {Component} from "react";

const {Content} = Layout;

export class EducationComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <Demo/>
            </Content>
        );
    }
}

export const Education = (EducationComponent);
