import * as React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default class ExperienceComponent extends React.Component {

    constructor(props: any) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {SEND_USER} = this.props;
        fetchProducts();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    public render() {
        return (
            <Content className="component">
                <p>Experience</p>
            </Content>
        );
    }
}

export const Experience = (ExperienceComponent);
