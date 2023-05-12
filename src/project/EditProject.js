import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, TextField, TextareaAutosize, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { Edit } from '@mui/icons-material';


function EditProject() {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('');


  useEffect(() => {
    fetch(`http://localhost:8080/api/projects/${id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name); 
        setDescription(data.description); 
        setClient(data.client); 
        setDeadline(data.deadline); 
        setStatus(data.status); 
      })
      .catch(err => console.error(err));
  }, [id]);


  const handleSubmit = event => {
    event.preventDefault();

    const data = { id, name, description, client, deadline, status };
    const url = `http://localhost:8080/api/projects/${id}`;

    console.log(name);
    console.log(id);

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

  };

  return (
    <Grid container xs={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 'auto', py: 1 }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: 26, color: "#1D267D" }} gutterBottom>
        <Edit /> Update project {id}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="name">Name:</Typography>
          <TextField
            sx={{ flexGrow: 4 }}

            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Grid>
        <Grid sx={{ py: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Typography sx={{ flexGrow: 1, fontSize: 17 }} htmlFor="description">Description:</Typography>
          <TextField
            sx={{ flexGrow: 4 }}
            id="description"
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
          <Button variant="contained" sx={{ flexGrow: 1, fontSize: 17}} type="submit"><Edit />Update</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default EditProject;

