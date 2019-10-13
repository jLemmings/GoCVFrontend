import * as React from "react";
import {Col, Layout, Row} from "antd";
import {Component} from "react";

const {Content} = Layout;

export default class StatsComponent extends Component {

    public render() {
        return (
            <Content className="component">
                <div className="component-title">
                    <Row type="flex" justify="center" align="middle">
                        <Col span={24}>
                            <h1>Stats</h1>
                        </Col>
                    </Row>
                </div>
            </Content>
        );
    }
}

export const Stats = (StatsComponent);
