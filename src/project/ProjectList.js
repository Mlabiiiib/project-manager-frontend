import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';

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
    <Grid container spacing={1}>
      <Grid item xs={4} spacing={1}>
        <p>TODO</p>
        {todoProjects.map(project => (
          <Card key={project.id} sx={{ minWidth: 275, m: 100 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {project.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={"/projects/" + project.id}>Check details</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Grid item xs={4} style={{ gap: 15 }}>
        <p>DOING</p>
        {doingProjects.map(project => (
          <Card key={project.id} sx={{ minWidth: 275,p: 100 }}>
                        <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {project.name}
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small" href={"/projects/" + project.id}>Check details</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Grid item xs={4} rowSpacing={6}>
        <p>DONE</p>
        {doneProjects.map(project => (
          <Card key={project.id} sx={{ minWidth: 275, p: 100, m: 100 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {project.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={"/projects/" + project.id}>Check details</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid >

  );
}

export default ProjectList;
