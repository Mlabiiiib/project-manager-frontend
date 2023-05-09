import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditProject({ project }) {
    const { id } = useParams();
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
        <div>
            <h1>Update Project</h1>
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
                        type="date"
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditProject;

