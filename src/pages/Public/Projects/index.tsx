import * as React from "react";
import {Layout} from "antd";
import {Component} from "react";
import {ProjectsContent} from "./ProjectsContent";

const {Content} = Layout;



export default class ProjectsComponent extends Component {



    constructor(props: any) {
        super(props);
    }



    public render() {

        return (
            <Content className="component">
                <ProjectsContent/>
            </Content>
        );
    }
}

export const Projects = (ProjectsComponent);
