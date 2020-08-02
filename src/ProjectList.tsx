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
                    return (
                    <li>{
                        `${project.namespace} | ${project.admins} | ${project.discovery_date} | ${project.last_update} | ${project.cause}`
                    }</li>);
                })
            }
        </ul>
        </div> );
}

export default ProjectList