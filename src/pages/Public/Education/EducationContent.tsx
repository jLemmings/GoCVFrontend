import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";
import {Card, Col, Icon, Row, Timeline} from "antd";
import moment from "moment";
import {Education} from "../../../model/education";

export const EducationContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    return (
        <div>
            <div className="component-title">
                <Row type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <h1>Education</h1>
                    </Col>
                </Row>
            </div>
            <Row type="flex" justify="space-around" align="middle">
                <Col xxl={22} xl={22} lg={22} md={0} sm={0} xs={0}>
                    {user.Education !== undefined ? (
                        <div>
                            <Timeline mode="alternate"
                            >
                                {user.Education.map((item: Education) =>
                                    <Timeline.Item
                                        key={item.Title}
                                    >
                                        <Card
                                            title={item.Title}
                                            className="card"
                                        >
                                            <p>{item.Institute}</p>
                                            <p>
                                                <Icon type="calendar" className="icon-space"/>
                                                {moment(item.From).format("MM.YYYY")}
                                                &emsp;
                                                &ndash;
                                                &emsp;
                                                {moment(item.To).format("MM.YYYY")}
                                            </p>
                                        </Card>

                                    </Timeline.Item>
                                )}
                            </Timeline>
                        </div>
                    ) : (<p>loading</p>)}
                </Col>
                <Col xxl={0} xl={0} lg={0} md={20} sm={20} xs={20}>
                    {user.Experience !== undefined ? (
                        <div>
                            <Timeline>
                                {user.Education.map((item: Education) =>
                                    <Timeline.Item key={item.Title}>
                                        <Card
                                            title={item.Title}
                                            className="card"
                                        >
                                            <p>{item.Institute}</p>
                                            <p>
                                                <Icon type="calendar" className="icon-space"/>
                                                {moment(item.From).format("MM.YYYY")}
                                                &emsp;
                                                &ndash;
                                                &emsp;
                                                {moment(item.To).format("MM.YYYY")}
                                            </p>
                                        </Card>
                                    </Timeline.Item>
                                )}
                            </Timeline>
                        </div>
                    ) : (<p>loading</p>)}
                </Col>
            </Row>
        </div>
    )
};
