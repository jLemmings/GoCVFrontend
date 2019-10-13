import {Col, Icon, Layout, Menu, Row, Spin} from "antd";
import {Link, Route, Switch} from "react-router-dom";
import * as routes from "../../../constants/routes";
import MyFooter from "../../../components/MyFooter";
import * as React from "react";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import {User} from "../../../model/user";
import EditProfileComponent from "../EditProfile";


const {Footer, Sider, Content} = Layout;

export const SideBar = () => {
    const user: User = useSelector((state: State) => state.userProfile.user);
    const isLoaded: boolean = useSelector((state: State) => state.userProfile.isLoaded);

    return (
        <div>
            <Layout style={{minHeight: "100vh"}}>
                <Sider breakpoint="lg"
                       collapsedWidth="0"
                >
                    <Row type="flex" justify="center" align="middle">
                        <Col>
                            <div className="Profile">
                                <img src={user.ProfileImageURL} className="profile-image" alt="Profile"/>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle">
                        <Col>
                            <div className="profile-name">
                                <h2>{user.FirstName} {user.LastName}</h2>
                            </div>
                        </Col>
                    </Row>

                    <Menu theme="dark" defaultSelectedKeys={["4"]} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="mail"/>
                            Experience
                            <Link to={routes.EDIT_PROFILE}/>
                        </Menu.Item>
                    </Menu>


                </Sider>

                <Layout className="home">
                    <Content>
                        {isLoaded ? (
                            <div className="full-height" style={{height: "100%"}}>
                                <Switch>
                                    <Route path={routes.EXPERIENCE}>
                                        <EditProfileComponent/>
                                    </Route>
                                </Switch>
                            </div>
                        ) : (
                            <div className="loading-spin"
                                 style={{backgroundColor: "#2b2e44", height: "100%", textAlign: "center", paddingTop: "40%"}}>
                                <Row type="flex" justify="space-around" align="middle">
                                    <Col span={12}>
                                        <Spin size="large"/>
                                        <h1>Fetching up to date information about myself.</h1>
                                    </Col>
                                </Row>

                            </div>
                        )}


                    </Content>
                    <Footer>
                        <MyFooter/>
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
};
