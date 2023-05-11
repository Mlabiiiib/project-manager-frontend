import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <Card key={project.id} sx={{my:3, mx:1}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {project.name}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" href={"/projects/" + project.id}>Check details</Button>
      </CardActions>
    </Card >
  );
}

const ProjectsSection = ({ projects, title }) => {
  return (
    <Grid item xs={4}>
      <Typography sx={{ p: 1, m: 1, fontWeight: 'bold', fontSize: 18, color: "#1D267D" }} gutterBottom>
        {title}
      </Typography>
      {projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </Grid>
  );
}

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const todoProjects = projects.filter(project => project.status == "TODO");
  const doingProjects = projects.filter(project => project.status == "DOING");
  const doneProjects = projects.filter(project => project.status == "DONE");


  return (
    <Grid container sx={{spacing:1, px:1}}>
      <ProjectsSection projects={todoProjects} title='TODO' />
      <ProjectsSection projects={doingProjects} title='DOING' />
      <ProjectsSection projects={doneProjects} title='DONE' />
    </Grid >
  );
}

export default ProjectList;
