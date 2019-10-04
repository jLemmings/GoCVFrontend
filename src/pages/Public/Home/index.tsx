import React, {Component} from "react";
import {SideBar} from "./SideBar";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {getUser} from "../../../actions";
import {State} from "../../../reducers";
import {connect} from "react-redux";
import {AnyAction} from "redux";

interface MyProps {
    getUser: () => void
    isLoaded: boolean
}

interface MyState {
    userAction: ThunkAction<Promise<void>, {}, {}, AnyAction>
}

export class HomeComponent extends Component<MyProps, MyState> {
    static defaultProps = {getUser: undefined, isLoaded: false};

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.isLoaded) {
            this.props.getUser()
        }
    }
    public render() {
        return (
            <SideBar/>
        );
    }

}


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: MyProps) => {
    return {
        getUser: () => {
            dispatch(getUser());
        }
    }
}

function mapStateToProps(state: State) {
    const {isLoaded, isFetching, user} = state.userProfile;
    return {
        user,
        isFetching,
        isLoaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);


