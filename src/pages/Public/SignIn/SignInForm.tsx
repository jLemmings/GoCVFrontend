import * as React from "react";
import * as routes from "../../../constants/routes";
import {auth} from "../../../firebase";
import {Form, Icon, Input, Button} from "antd";
import {RouteComponentProps, withRouter} from "react-router-dom";
import "./SignIn.css";

interface InterfaceProps extends RouteComponentProps<any> {
    email?: string;
    error?: any;
    password?: string;
}

interface InterfaceState {
    email: string;
    error: any;
    password: string;
}

export class SignInForm extends React.Component<InterfaceProps,
    InterfaceState> {
    private static INITIAL_STATE = {
        email: "",
        error: null,
        password: ""
    };

    private static propKey(propertyName: string, value: any): object {
        return {[propertyName]: value};
    }

    constructor(props: InterfaceProps) {
        super(props);
        this.state = {...SignInForm.INITIAL_STATE};
    }

    setStateWithEvent(event: any, columnType: string): void {
        this.setState(SignInForm.propKey(columnType, (event.target as any).value));
    }

    public onSubmit = (event: any) => {
        console.log("IN SUBMIT");
        const {email, password} = this.state;

        console.log(email, password);
        console.log("AFTER HISTORY");

        auth
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Hello");
                this.setState(() => ({...SignInForm.INITIAL_STATE}));
                console.log("SUCCESS");
                this.props.history.push(routes.ADMIN_HOME);
            })
            .catch(error => {
                this.setState(SignInForm.propKey("error", error));
            });

        event.preventDefault();
    };

    public render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item style={{height: "3em", marginBottom: "1vh"}}>
                    <Input
                        id="text-area"
                        style={{marginBottom: "5vh"}}
                        prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25"}}/>}
                        placeholder="Email"
                        onChange={(event: any) => this.setStateWithEvent(event, "email")}
                    />,
                </Form.Item>
                <Form.Item style={{height: "3em", marginBottom: "1vh"}}>
                    <Input
                        id="text-area"
                        style={{marginBottom: "1vh"}}
                        prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25"}}/>}
                        type="password"
                        placeholder="Password"
                        onChange={(event: any) => this.setStateWithEvent(event, "password")}
                    />,
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={this.onSubmit} className="SubmitBtn">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedSignInForm = withRouter(SignInForm);
export const CustomizedForm = Form.create({})(WrappedSignInForm);
