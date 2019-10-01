import * as React from "react";
import {Layout} from "antd";
import {useSelector} from "react-redux";
import {getUser} from "../../../actions";

const {Content} = Layout;

export default class EducationComponent extends React.Component {

    getProfile = () => useSelector(getUser);

    componentDidMount() {
        this.getProfile();
    }

    public render() {
        return (
            <Content className="component">
                <p>Education</p>
            </Content>
        );
    }
}

export const Education = (EducationComponent);
