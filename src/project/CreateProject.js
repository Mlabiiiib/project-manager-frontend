import { useState, useEffect } from 'react';
import { Typography, TextField, TextareaAutosize, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React  from 'react';


function CreateProject({ project }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [client, setClient] = useState('');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState('');

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
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));

    };

    return (
        <div>
        <Typography variant="h1">Create Project</Typography>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography htmlFor="name">Name:</Typography>
            <TextField
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <Typography htmlFor="description">Description:</Typography>
            <TextareaAutosize
              id="description"
              value={description}
              onChange={event => setDescription(event.target.value)}
            ></TextareaAutosize>
          </div>
          <div>
            <Typography htmlFor="client">Client:</Typography>
            <TextField
              type="text"
              id="client"
              value={client}
              onChange={event => setClient(event.target.value)}
            />
          </div>
          <div>
            <Typography htmlFor="deadline">Deadline:</Typography>
            <TextField
              type="date"
              id="deadline"
              value={deadline}
              onChange={event => setDeadline(event.target.value)}
            />
          </div>
          <div>
            <Typography htmlFor="status">Status:</Typography>
            <FormControl>
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
          </div>
          <Button type="submit">Create</Button>
        </form>
      </div>
    );
}

export default CreateProject;

