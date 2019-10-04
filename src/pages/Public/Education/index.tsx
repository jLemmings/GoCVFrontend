import * as React from "react";
import {Layout} from "antd";
import {EducationContent} from "./educationContent";
import {Component} from "react";

const {Content} = Layout;

export class EducationComponent extends Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Content className="component">
                <EducationContent/>
            </Content>
        );
    }

}

export const Education = (EducationComponent);
