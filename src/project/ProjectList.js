import { useState, useEffect } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {projects.map(project => (
        <div key={project.id} >
          <h3>{project.name}</h3>
          <p>{project.status}</p>
          <a href={"/projects/"+ project.id}>Check details</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
