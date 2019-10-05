import {Col, Icon, Layout, Menu, Row, Spin} from "antd";
import logo from "../../../assets/profile_image.jpg";
import {Link, Route, Switch} from "react-router-dom";
import * as routes from "../../../constants/routes";
import {Education} from "../Education";
import {Skills} from "../Skills";
import {About} from "../About";
import {Projects} from "../Projects";
import {Stats} from "../Stats";
import MyFooter from "../../../components/MyFooter";
import * as React from "react";
import {useSelector} from "react-redux";
import {State} from "../../../reducers";
import {User} from "../../../model/user";
import ExperienceComponent from "../Experience";

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
                                <img src={logo} className="ProfileImage" alt="Profile"/>
                            </div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle">
                        <Col>
                            <div className="ProfileName">
                                <p>{user.FirstName} {user.LastName}</p>
                            </div>
                        </Col>
                    </Row>

                    <Menu theme="dark" defaultSelectedKeys={["4"]} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="mail"/>
                            Experience
                            <Link to={routes.EXPERIENCE}/>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="book"/>
                            Education
                            <Link to={routes.EDUCATION}/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="experiment"/>
                            Skills
                            <Link to={routes.SKILLS}/>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user"/>
                            Who am I?
                            <Link to={routes.ABOUT}/>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="branches"/>
                            Projects
                            <Link to={routes.PROJECTS}/>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="line-chart"/>
                            Stats
                            <Link to={routes.STATS}/>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="home">
                    <Content>
                        {isLoaded ? (
                            <div className="full-height" style={{height: "100%"}}>
                                <Switch>
                                    <Route path={routes.EXPERIENCE}>
                                        <ExperienceComponent/>
                                    </Route>
                                    <Route path={routes.EDUCATION}>
                                        <Education/>
                                    </Route>
                                    <Route path={routes.SKILLS}>
                                        <Skills/>
                                    </Route>
                                    <Route path={routes.ABOUT}>
                                        <About/>
                                    </Route>
                                    <Route path={routes.PROJECTS}>
                                        <Projects/>
                                    </Route>
                                    <Route path={routes.STATS}>
                                        <Stats/>
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
