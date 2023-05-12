import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectList from './project/ProjectList.js';
import ProjectDetails from './project/ProjectDetails.js';
import CreateProject from './project/CreateProject.js';
import EditProject from './project/EditProject.js';
import Header from './project/Header.js';
import Footer from './project/Footer.js';
import React from 'react';



function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:id/edit" element={<EditProject />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/" element={<ProjectList />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
