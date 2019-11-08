import {User} from "../../../model/user";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import React from "react";
import {Col, Row, Table, Tag} from "antd";
import moment from "moment";


export const ProjectsContent = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);
    const {Column} = Table;

    console.log(user.Projects);

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
                    <Col xxl={22} xl={22} lg={22} md={20} sm={20} xs={20}>
                        <Table
                            dataSource={user.Projects}
                            rowKey="URL"
                        >
                            <Column title="Name" dataIndex="Name" key="Name"/>
                            <Column title="Language" dataIndex="Language" key="Language"/>
                            <Column
                                title="Stack"
                                dataIndex="Stack"
                                key="Stack"
                                render={(tags: any) => (
                                    <span>
                                      {tags.map((tag: string) => (
                                          <Tag color="blue" key={tag}>
                                              {tag}
                                          </Tag>
                                      ))}
                                    </span>
                                )}
                            />
                            <Column
                                title="URL"
                                dataIndex="URL"
                                key="URL"
                                render={(tags: string) => (
                                    <span>
                                        <a href={tags} target="_blank">Project URL</a>
                                    </span>
                                )}
                            />
                            <Column title="Last Update"
                                    dataIndex="LastUpdate"
                                    key="LastUpdate"
                                    render={(tags: string) => (
                                        <span>
                                            {moment(tags).format("YYYY.MM.DD")}
                                        </span>
                                    )}
                            />
                        </Table>,
                    </Col>
                </Row>
            </div>
        </div>
    )
}


