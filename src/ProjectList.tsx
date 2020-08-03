import React from "react";
import {Project} from "./api";
import './ProjectList.css';

type OwnProps = {
    projects: Project[];
    handleSelectProject: (arg: string) => void;
}

function ProjectList({projects, handleSelectProject}: OwnProps) {

    return (
        <div className='cardView'>
        {
            projects.map(project => {
                return (
                    <div className='projectCard' onClick={(e) => {
                        handleSelectProject(project.name)
                    }}>
                        <div className='cardName'>
                        {project.name}
                        </div>
                        {/* <div className='admins'>
                            {project.admins}
                        </div> */}
                        <div className='cardStamp'>
                        {project.discovery_date}
                        </div>
                        <div className='cardStamp'>
                        {project.last_update}
                        </div>
                        <div className='cause'>
                        {project.cause}
                        </div>
                    {/* {
                        `${project.name} | ${project.admins} | ${project.discovery_date} | ${project.last_update} | ${project.cause}`
                    } */}
                    </div>
                );
            })
        }
        </div> );
}

export default ProjectList