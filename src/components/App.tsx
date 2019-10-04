import * as React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import * as routes from "../constants/routes";
import {firebase} from "../firebase";
import {withAuthentication} from "../firebase/withAuthentication";
import Home from "../pages/Public/Home";
import {SignIn} from "../pages/Public/SignIn";
import "antd/dist/antd.css";
import "../index.css";
import {AdminHome} from "../pages/Authorized/AdminHome";
import {Education} from "../pages/Public/Education";
import Experience from "../pages/Public/Experience";
import {Skills} from "../pages/Public/Skills";
import {About} from "../pages/Public/About";
import {Projects} from "../pages/Public/Projects";
import {Stats} from "../pages/Public/Stats";
import {EditProfile} from "../pages/Authorized/EditProfile";
import {UserState} from "../model/user";
import {getUser} from "../actions";
import {Component} from "react";

interface AppProps {
    sendUser: typeof getUser
    user: UserState
}

class AppComponent extends Component<AppProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            authUser: null
        };
    }

    public componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState(() => ({authUser}))
                : this.setState(() => ({authUser: null}));
        });
    }

    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact={true} from="/" to={routes.ABOUT}/>
                    <Route exact={true} path={routes.HOME} component={Home}/>
                    <Route exact={true} path={routes.SIGN_IN} component={SignIn}/>
                    <Route exact={true} path={routes.ADMIN_HOME} component={AdminHome}/>

                    <Home>
                        <Route exact={true} path={routes.EXPERIENCE} component={Experience}/>
                        <Route exact={true} path={routes.EDUCATION} component={Education}/>
                        <Route exact={true} path={routes.SKILLS} component={Skills}/>
                        <Route exact={true} path={routes.ABOUT} component={About}/>
                        <Route exact={true} path={routes.PROJECTS} component={Projects}/>
                        <Route exact={true} path={routes.STATS} component={Stats}/>
                    </Home>
                    <AdminHome>
                        <Route exact={true} path={routes.EDIT_PROFILE} component={EditProfile}/>
                    </AdminHome>
                    <Redirect from="*" to={routes.ABOUT}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export const App = withAuthentication(AppComponent);
