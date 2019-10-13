import {useSelector} from "react-redux";
import React from "react";
import {State} from "../../../reducers/";
import {User} from "../../../model/user";
import {Card, Col, Icon, Row, Timeline} from "antd";
import moment from "moment";
import {Education} from "../../../model/education";

export const ExperienceContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    console.log("User Name: ", user.FirstName);
    console.log("EducationPage: ", user.Education);


    return (
        <div>
            <Row type="flex" justify="space-around" align="middle">
                <Col span={12}>
                    <div className="component-title">
                        <h1>Education</h1>
                    </div>
                    {user.Education !== undefined ? (
                    <div>
                        <Timeline mode="alternate">
                            {user.Education.map((item: Education) =>
                                <Timeline.Item key={item.Title}>
                                    <Card title={item.Title}>
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
