import * as React from "react";
import {Layout} from "antd";
import {Demo} from "./demo";
import {Component} from "react";
import {connect} from "react-redux";
import {State} from "../../../reducers";

const {Content} = Layout;

export class EducationComponent extends Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, getUser } = this.props;
        dispatch(getUser());
    }
    public render() {
        return (
            <Content className="component">
                <Demo/>
            </Content>
        );
    }
}

function mapStateToProps(state: State) {
    const { isLoaded, isFetching, user } = state.userProfile;
    return {
        user,
        isFetching,
        isLoaded
    }
}

export default connect(mapStateToProps)(EducationComponent)
export const Education = (EducationComponent);
