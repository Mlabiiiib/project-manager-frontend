import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditProject from './EditProject.js';

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
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Client: {project.client}</p>
      <p>Deadline: {project.deadline}</p>
      <p>Status: {project.status}</p>
      <EditProject project={project} />
    </div>
  );
}

export default ProjectDetails;
