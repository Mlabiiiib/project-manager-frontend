import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            <h1>Create Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="client">Client:</label>
                    <input
                        type="text"
                        id="client"
                        value={client}
                        onChange={event => setClient(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="deadline">Deadline:</label>
                    <input
                        type="datetime-local"
                        id="deadline"
                        value={deadline}
                        onChange={event => setDeadline(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={event => setStatus(event.target.value)}
                    >
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="TODO">TODO</option>
                        <option value="DOING">DOING</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateProject;

