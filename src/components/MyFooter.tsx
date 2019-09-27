import * as React from "react";
import {Row, Col, Icon} from "antd";


function MyFooter() {
    return (
            <div className="MyFooter">
                <Row type="flex" justify="center" align="middle" className="footer-content">
                    <Col xl={6} lg={6} xs={6}>
                        <div className="footer-item">
                            <Icon type="github" className="footer-icon"/>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} xs={6}>
                        <a href="google.ch">
                            <div className="footer-item">
                                <Icon type="linkedin" className="footer-icon"/>
                            </div>
                        </a>
                    </Col>
                    <Col xl={6} lg={6} xs={6}>
                        <a href="mailto:derp@derp.ch">
                            <div className="footer-item">
                                <Icon type="mail" className="footer-icon"/>
                            </div>
                        </a>
                    </Col>
                    <Col xl={6} lg={6} xs={6}>
                        <a href="mailto:herp@derp.ch">
                            <div className="footer-item">
                                <Icon type="linkedin" className="footer-icon"/>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
    )
}

export default MyFooter
