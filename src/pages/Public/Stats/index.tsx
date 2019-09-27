import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class StatsComponent extends React.Component {

    public render() {
        return (
            <Content className="component">
                <p>Stats</p>
            </Content>
        );
    }
}

export const Stats = (StatsComponent);
