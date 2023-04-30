import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectList from './project/ProjectList.js';
import ProjectDetails from './project/ProjectDetails.js';
import ProjectForm from './project/ProjectForm.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/projects/new">New Project</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/projects/new" element={<ProjectForm />} />
          <Route path="/projects/:id/edit" element={<ProjectForm editMode={true} />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/" element={<h1>Welcome to the Project Management Application!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
