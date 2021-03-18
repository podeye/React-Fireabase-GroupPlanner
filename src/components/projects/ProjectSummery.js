import React from 'react'
import moment from 'moment'

const ProjectSummery = ({project}) => {
  return (
    <div className='project-list section'>
      <div className="card z-depth-0 project-summery">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummery
