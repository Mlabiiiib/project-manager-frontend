import { useState, useEffect } from 'react';
import {Alert, AlertTitle, Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { Add } from '@mui/icons-material';


function CreateProject({ project }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');
  const [showCreated, setShowCreated] = useState(false);


  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description);
      setClient(project.client);
      setDeadline(project.deadline);
      setStatus(project.status);
    }


  }, [project]);

  const handleSubmit = event => {
    event.preventDefault();

    const data = { name, description, client, deadline, status };

    fetch('http://localhost:8080/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {res.json();setShowCreated(true);})
      .then(data => console.log(data))
      .catch(err => console.error(err));

  };

  return (
    <Grid container xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', py: 1 }}>
              <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        {showCreated && (
          <Alert sx={{ flexGrow: 1 }} severity="success">
            <AlertTitle>Created</AlertTitle>
            Project {name} created successfully.
          </Alert>
        )}
      </Grid>
        <Typography sx={{ fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
          <Add/> Create Project
        </Typography>
      <form onSubmit={handleSubmit}>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="name">Name:</Typography>
          <TextField
            sx={{ flexGrow: 4 }}
            type="text"
            id="name"
            placeholder="Poject name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="description">Description:</Typography>
          <TextField
          sx={{ flexGrow: 4 }}
          type="text"
            id="description"
            placeholder="Project description, to include all the details"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="client">Client:</Typography>
          <TextField
          sx={{ flexGrow: 4 }}
            type="text"
            id="client"
            placeholder="Client company name"
            value={client}
            onChange={event => setClient(event.target.value)}
          />
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="deadline">Deadline:</Typography>
          <TextField
          sx={{ flexGrow: 4 }}
            type="date"
            id="deadline"
            placeholder="Deadline"
            value={deadline}
            onChange={event => setDeadline(event.target.value)}
          />
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="status">Status:</Typography>
          <FormControl sx={{ flexGrow: 4 }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              id="status"
              value={status}
              onChange={event => setStatus(event.target.value)}
              labelId="status-label"
            >
              <MenuItem value="" disabled hidden>
                Choose here
              </MenuItem>
              <MenuItem value="TODO">TODO</MenuItem>
              <MenuItem value="DOING">DOING</MenuItem>
              <MenuItem value="DONE">DONE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

          <Button variant="contained" sx={{ flexGrow: 1, fontSize: 17}} type="submit"><Add />Create a new project</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default CreateProject;

