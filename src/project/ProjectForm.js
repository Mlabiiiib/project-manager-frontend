import { useState, useEffect } from 'react';

function ProjectForm({ mode, project }) {
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

        const method = mode === 'create' ? 'POST' : 'PUT';

        const url = mode === 'create' ? 'http://localhost:8080/api/projects' : `http://localhost:8080/api/projects/${project.id}`;

        fetch(url, {
            method,
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
            <h1>{mode === 'create' ? 'Create Project' : 'Update Project'}</h1>
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
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
                <button type="submit">{mode === 'create' ? 'Create' : 'Update'}</button>
            </form>
        </div>
    );
}

export default ProjectForm;

