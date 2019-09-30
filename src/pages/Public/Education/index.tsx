import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class EducationComponent extends React.Component {

    async componentDidMount() {
        const url = process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID;
        const response = await fetch(url, {
            method: 'get'
        });
        const data = await response.json();

        this.setState({
                loading: false,
            }
        );
        console.log(data);
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
