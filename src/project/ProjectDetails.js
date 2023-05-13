import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertTitle, Button, Grid, Typography } from '@mui/material';
import React  from 'react';
import { Delete, Edit, Task } from '@mui/icons-material';



function ProjectDetails() {


  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [showDeleted, setShowDeleted] = useState(false);



  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${id}`)
      .then(res => res.json())
      .then(data => setProject(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const deleteX = id => {
    const url = `http://localhost:8080/api/projects/${id}`;
  
  
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(setShowDeleted(true))
    .then(
      setTimeout(() => {
        window.location.href = 'http://localhost:3000/projects'; 
      }, 3000)
    )

      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <Grid container xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', py: 1 }}>
    <Grid>
    <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        {showDeleted && (
          <Alert sx={{ flexGrow: 1 }} severity="success">
            <AlertTitle>Deleted</AlertTitle>
            Project {id} deleted successfully.
          </Alert>
        )}
      </Grid>
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
        <Button startIcon={<Delete/>} variant="contained" color="error" size="large"   onClick={() => {deleteX(id)}}>Delete</Button>
      </Grid>
    </Grid>
  );
}

export default ProjectDetails;
