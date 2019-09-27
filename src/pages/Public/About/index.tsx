import * as React from "react";
import {Col, Icon, Layout, Row} from "antd";
import "./about.css";


const {Content} = Layout;


interface InterfaceState {
    uid?: string,
    email?: string,
    loading: boolean,
    isSaving: boolean,
    firstName: string,
    lastName: string,
    bio?: string,
}

interface InterfaceProps {
    email?: string;
}

export default class AboutComponent extends React.Component<InterfaceProps, InterfaceState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            isSaving: false,
            email: "",
            firstName: "",
            lastName: "",
        };
    }

    async componentDidMount() {
        const url = process.env.REACT_APP_BASE_URL + "/users/" + process.env.REACT_APP_USER_ID;
        console.log(url);
        const response = await fetch(url, {
            method: 'get'
        });
        const data = await response.json();

        this.setState({
                uid: data.data.ID,
                email: data.data.Email,
                loading: false,
                firstName: data.data.FirstName,
                lastName: data.data.LastName,
                bio: data.data.Bio,
            }
        );
    }

    public render() {
        return (
            <Content className="component">
                {this.state.loading ? <Icon type="loading" style={{fontSize: '100px'}}/> :
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
                                    <p>{this.state.bio}</p>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="">
                                    LANGUAGES
                                </div>
                            </Col>
                        </Row>
                    </div>
                }
            </Content>
        );
    }
}

export const About = (AboutComponent);
