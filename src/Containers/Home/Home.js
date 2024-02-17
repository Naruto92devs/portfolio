import React from "react";
import '../../index.css';
import Hero from "../../Components/HomePageComponents/Hero";
import Services from "../../Components/HomePageComponents/Services";
import WorkExperince from "../../Components/AboutpageComponents/WorkExperience";
import ProjectSlider from "../../Components/HomePageComponents/ProjectSlider";
import Testimonials from "../../Components/HomePageComponents/Testimonials";
import Discuss from "../../Components/HomePageComponents/Discuss";

const Home = () => {
  
    return (
        <div id="home" className="home">
            <Hero/>
            <Services/>
            <WorkExperince/>
            <ProjectSlider/>
            <Testimonials/>
            <Discuss/>
        </div>
    );
}

export default Home;