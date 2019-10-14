import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";
import {Card, Col, Icon, Row, Timeline} from "antd";
import moment from "moment";
import {Experience} from "../../../model/experience";

export const ExperienceContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    console.log("User Name: ", user.FirstName);
    console.log("EducationPage: ", user.Education);


    return (
        <div>
            <div className="component-title">
                <Row type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <h1>Experience</h1>
                    </Col>
                </Row>
            </div>
            <Row type="flex" justify="space-around" align="middle">
                <Col xxl={22} xl={22} lg={22} md={0} sm={0} xs={0}>
                    {user.Experience !== undefined ? (
                        <div>
                            <Timeline mode="alternate">
                                {user.Experience.map((item: Experience) =>
                                    <Timeline.Item key={item.Title}>
                                        <Card
                                            title={item.Title}
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
                                            <p>{item.Description}</p>
                                            <p>
                                                <Icon type="calendar"/>
                                                {moment(item.From).format("MM.YYYY")}
                                                &emsp;
                                                &ndash;
                                                &emsp;
                                                {moment(item.To).format("MM.YYYY")}
                                            </p>
                                            {item.Tasks.map((task: string) =>
                                                <ul key={task}>
                                                    <li>{task}</li>
                                                </ul>)}
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
                                {user.Experience.map((item: Experience) =>
                                    <Timeline.Item key={item.Title}>
                                        <Card
                                            title={item.Title}
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
                                            <p>{item.Description}</p>
                                            <p>
                                                <Icon type="calendar"/>
                                                {moment(item.From).format("MM.YYYY")}
                                                &emsp;
                                                &ndash;
                                                &emsp;
                                                {moment(item.To).format("MM.YYYY")}
                                            </p>
                                            {item.Tasks.map((task: string) =>
                                                <ul key={task}>
                                                    <li>{task}</li>
                                                </ul>)}
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
