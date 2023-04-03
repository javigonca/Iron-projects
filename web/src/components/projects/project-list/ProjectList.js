import React, { useEffect, useState } from 'react'
import projectsService from '../../../services/projects'

function ProjectList() {

const [projects, setProjects] = useState([]);

useEffect(() => {
  projectsService.list()
    .then((projects) => setProjects(projects))
    .catch(console.error)
  
}, []);

  return (
    <>
      <h1>Projects List</h1>
      {projects.map((project) => (
        <div key={project.id}> {project.title} </div>
      ))}

    </>
    
  )
}

export default ProjectList