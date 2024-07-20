import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import OpenS from './components/OpenS';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='scroll-smooth'>
        <Navbar/>
        <div className="">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/open-source" element={<OpenS/>} />
            <Route path="/contact" element={<Contact/>} />
           </Routes>
           <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
