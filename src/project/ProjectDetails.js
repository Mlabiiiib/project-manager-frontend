import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import EditProject from './EditProject.js';
import React  from 'react';


function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h1">{project.name}</Typography>
      <Typography variant="body1">{project.description}</Typography>
      <Typography variant="body1">Client: {project.client}</Typography>
      <Typography variant="body1">Deadline: {project.deadline}</Typography>
      <Typography variant="body1">Status: {project.status}</Typography>
      <EditProject project={project} />
    </div>
  );
}

export default ProjectDetails;
