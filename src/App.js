import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

