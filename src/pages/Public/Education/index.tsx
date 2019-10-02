import * as React from "react";
import {Layout} from "antd";
import Demo from "./demo";

const {Content} = Layout;

export default class EducationComponent extends React.Component {
    public render() {
        return (
            <Content className="component">
                <Demo/>
            </Content>
        );
    }
}

export const Education = (EducationComponent);
