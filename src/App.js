import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectList from './project/ProjectList.js';
import ProjectDetails from './project/ProjectDetails.js';
import CreateProject from './project/CreateProject.js';
import EditProject from './project/EditProject.js';
import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';


function App() {
  return (
    <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
              </Link>
              <Link to="/projects/new"><Button color="inherit">New project</Button></Link>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/projects/new" element={<CreateProject />} />
          <Route path="/projects/:id/edit" element={<EditProject />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/" element={<ProjectList />} />
        </Routes>
    </Router>
  );
}

export default App;
