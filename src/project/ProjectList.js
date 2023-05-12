import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react';
import ListIcon from '@mui/icons-material/List';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';


const ProjectCard = ({ project }) => {
  return (
    <Card key={project.id} sx={{ my: 3, mx: 1, boxShadow: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          {project.name}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" href={"/projects/" + project.id}>Check details</Button>
      </CardActions>
    </Card >
  );
}


function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const todoProjects = projects.filter(project => project.status === "TODO");
  const doingProjects = projects.filter(project => project.status === "DOING");
  const doneProjects = projects.filter(project => project.status === "DONE");


  return (
    <Grid container sx={{ spacing: 1, px: 1 }}>
      <Grid item xs={4}>
        <Typography sx={{ p: 1, m: 1, fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
          <ListIcon /> TODO
        </Typography>
        {todoProjects.map(project => (
          <ProjectCard project={project} />
        ))}
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ p: 1, m: 1, fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
          <AutorenewIcon /> DOING
        </Typography>
        {doingProjects.map(project => (
          <ProjectCard project={project} />
        ))}
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ p: 1, m: 1, fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
          <DoneIcon /> DONE
        </Typography>
        {doneProjects.map(project => (
          <ProjectCard project={project} />
        ))}
      </Grid>
    </Grid >
  );
}

export default ProjectList;
