import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class EducationComponent extends React.Component {

    public render() {
        return (
            <Content className="component">
                <p>Education</p>
            </Content>
        );
    }
}

export const Education = (EducationComponent);
