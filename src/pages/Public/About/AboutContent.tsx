import {Col, Row} from "antd";
import * as React from "react";
import {User} from "../../../model/user";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";

export const AboutContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    return (
        <div className="aboutMe">
            <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                    <div className="profileName">
                        <h1>About Me</h1>
                    </div>
                </Col>
            </Row>

            <Row type="flex" justify="center" align="middle">
                <Col span={12}>
                    <div className="">
                        <p>{user.Bio}</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="">
                        LANGUAGES
                    </div>
                </Col>
            </Row>
        </div>

    )
}

