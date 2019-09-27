import * as React from "react";
import {withRouter} from "react-router-dom";
import {Row, Col} from 'antd';
import "./SignIn.css";
import {CustomizedForm} from "./SignInForm";


const SignInComponent = () => (
    <div className="SignInPage">
        <Row type="flex" justify="center" align="middle" style={{height: "100%"}}>
            <Col xs={20} sm={18} md={16} lg={10} xl={10} xxl={8}>
                <div className="login-form">
                    <h1>SignIn</h1>
                    <CustomizedForm/>
                </div>
            </Col>
        </Row>
    </div>
);

export const SignIn = withRouter(SignInComponent);
