import * as React from "react";
import {Col, Icon, Layout, Menu, Row} from "antd";
import {Link, Route, Switch} from "react-router-dom";
import * as logo from "../../../assets/profile_image.jpg";
import * as routes from "../../../constants/routes";
import MyFooter from "../../../components/MyFooter";
import {EditProfile} from "../EditProfile";
import {withAuthorization} from "../../../firebase/withAuthorization";
import {Projects} from "../../Public/Projects";

const {Content, Footer, Sider} = Layout;


export class AdminHomeComponent extends React.Component {
    public render() {
        return (
            <div>
                <Layout style={{minHeight: "100vh"}}>
                    <Sider breakpoint="lg"
                           collapsedWidth="0"
                           onBreakpoint={broken => {
                               console.log(broken);
                           }}
                           onCollapse={(collapsed, type) => {
                               console.log(collapsed, type);
                           }}
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
                                    <p>Joshua Hemmings</p>
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
                    <Layout>
                        <Content>
                            <Route exact={true} path={routes.EDIT_PROFILE} component={EditProfile}/>
                        </Content>

                        <Switch>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                        </Switch>
                        <Footer><MyFooter/></Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }

}

const authCondition = (authUser: any) => !!authUser;
export const AdminHome = withAuthorization(authCondition)(AdminHomeComponent);
