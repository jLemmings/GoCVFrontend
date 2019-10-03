import * as React from "react";
import {Col, Icon, Layout, Row, Table} from "antd";
import {Component} from "react";

const {Content} = Layout;

interface Project {
    name?: string;
    description?: string;
    language?: string;
    url?: string;
    lastUpdate?: Date;
}

interface InterfaceState {
    loading: boolean
    projects?: Project[],
}

interface InterfaceProps {
    email?: string;
}

export default class ProjectsComponent extends Component<InterfaceProps, InterfaceState> {

    columns = [
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

    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    async componentDidMount() {
        const url = process.env.REACT_APP_BASE_URL + "/projects/" + process.env.REACT_APP_USER_ID;
        const response = await fetch(url, {
            method: "get"
        });
        const data = await response.json();

        this.setState({
                projects: data.data,
                loading: false,
            }
        );
        console.log(this.state.projects);
    }



    public render() {

        return (
            <Content className="component">
                <h1>Projects</h1>
                {this.state.loading ? <div>
                        <Row type="flex" justify="center" style={{height: "100%", paddingTop: "20px"}}>
                            <Col span={4}>
                                <Icon type="loading" style={{fontSize: "100px"}}/>
                            </Col>
                        </Row>
                    </div> :
                    <div className="projectTable">
                        <Row type="flex" justify="center" align="middle">
                            <Col span={20}>
                                <Table
                                    className="projectTable"
                                    dataSource={this.state.projects}
                                    columns={this.columns}
                                    rowKey="URL"
                                />
                            </Col>
                        </Row>
                    </div>
                }

            </Content>
        );
    }
}

export const Projects = (ProjectsComponent);
