import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import EditProject from './EditProject.js';
import React  from 'react';
import { Delete, Edit, Task } from '@mui/icons-material';
function deleteProject(id){

  
  const url = `http://localhost:8080/api/projects/${id}`;


  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

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
    <Grid container xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', py: 1 }}>
    <Grid>
    <Typography sx={{ fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
          <Task/> Project {project.id} details
    </Typography>
        <Typography sx={{ fontSize: 21, my:1 }} variant="body1">Name: {project.name}</Typography>
        <Typography sx={{ fontSize: 21, my:1 }} variant="body1">Description: {project.description}</Typography>
        <Typography sx={{ fontSize: 21, my:1 }} variant="body1">Client: {project.client}</Typography>
        <Typography sx={{ fontSize: 21, my:1 }} variant="body1">Deadline: {project.deadline}</Typography>
        <Typography sx={{ fontSize: 21, my:1 }} variant="body1">Status: {project.status}</Typography>
      </Grid>
      
      <Grid sx={{ justifyContent: 'space-evenly',  py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <Button startIcon={<Edit/>} variant="contained" size="large" href={"/projects/" + project.id+"/edit"}>Update</Button>
        <Button startIcon={<Delete/>} variant="contained" color="error" size="large"   onClick={() => {deleteProject(id)}}>Delete</Button>
      </Grid>
    </Grid>
  );
}

export default ProjectDetails;
