import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Components/Navigation/Nagivation";
import Home from "./Containers/Home/Home";
import About from './Containers/About/About';
import Service from "./Containers/Services/Service";
import Resume from "./Containers/Resume/Resume";
import MyProjects from "./Containers/Projects/MyProjects";
import Footer from "./Components/Footer/Footer";
import NoPage from "./Containers/NoPage/NoPage";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="service" element={<Service/>} />
          <Route path="projects" element={<MyProjects/>} />
          <Route path="whyUs" element={<Resume/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
