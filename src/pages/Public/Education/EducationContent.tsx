import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";
import {Card, Col, Icon, Row, Timeline} from "antd";
import moment from "moment";
import {Education} from "../../../model/education";

export const EducationContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    console.log("User Name: ", user.FirstName);
    console.log("EducationPage: ", user.Education);


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
                <Col span={20}>
                    {user.Education !== undefined ? (
                        <div>
                            <Timeline mode="alternate"
                                      style={{
                                          backgroundColor: "none",
                                      }}
                            >
                                {user.Education.map((item: Education) =>
                                    <Timeline.Item
                                        key={item.Title}
                                    >
                                        <Card
                                            title={item.Title}
                                            className="card"
                                            style={{borderColor: "#001529"}}
                                            headStyle={{
                                                backgroundColor: "#20202b",
                                                color: "#E3E3E3",
                                            }}
                                            bodyStyle={{
                                                backgroundColor: "#30303d",
                                                color: "#E3E3E3",
                                            }}
                                        >
                                            <p>{item.Institute}</p>
                                            <p>
                                                <Icon type="calendar"/>
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
