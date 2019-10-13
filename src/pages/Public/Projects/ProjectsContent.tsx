import {User} from "../../../model/user";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import React from "react";
import {Col, Row, Table} from "antd";



export const ProjectsContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);

    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            key: "Name",
        },
        {
            title: "Description",
            dataIndex: "Description",
            key: "Description",
        },
        {
            title: "Language",
            dataIndex: "Language",
            key: "Language",
        },
        {
            title: "URL",
            dataIndex: "URL",
            key: "URL",
        },
        {
            title: "Last Update",
            dataIndex: "LastUpdate",
            key: "LastUpdate",
        },
    ];

    return (
        <div>
            <div className="component-title">
                <Row type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <h1>Projects</h1>
                    </Col>
                </Row>
            </div>
            <div className="project-table">
                <Row type="flex" justify="center" align="middle">
                    <Col span={20}>
                        <Table
                            className="projects-table"
                            showHeader={true}
                            dataSource={user.Projects}
                            columns={columns}
                            rowKey="URL"
                            bodyStyle={{color: "white", backgroundColor: "#30303d"}}
                            useFixedHeader={true}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}


