import React from "react";
import {Project} from "./api";

type OwnProps = {
    projects: Project[];
} 

function ProjectList({projects}: OwnProps) {
    return (<div>
        <p>project list!</p>
        <ul>
            {
                projects.map(project => {
                    return (<li>{
                        `${project.name} | ${project.quantity}`
                    }</li>);
                })
            }
        </ul>
        </div> );
}

export default ProjectList