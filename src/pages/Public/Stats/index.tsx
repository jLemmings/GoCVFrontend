import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";

const {Content} = Layout;

export default class StatsComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <p>Stats</p>
            </Content>
        );
    }
}

export const Stats = (StatsComponent);
