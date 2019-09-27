import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class EditProfileComponent extends React.Component {

    public render() {
        return (
            <Content className="component">
                <p>Edit Profile</p>
            </Content>
        );
    }
}

export const EditProfile = (EditProfileComponent);
