import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";

const {Content} = Layout;

export default class EditProfileComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <p>Edit Profile</p>
            </Content>
        );
    }
}

export const EditProfile = (EditProfileComponent);
