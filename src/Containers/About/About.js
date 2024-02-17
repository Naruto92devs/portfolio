import React from 'react';
import '../../index.css';
import WorkExperince from "../../Components/AboutpageComponents/WorkExperience";
import WhyHire from "../../Components/AboutpageComponents/WhyHire";


const About = () => {

    // useEffect(() => {
    //     // Get the hash fragment from the URL
    //     const hash = window.location.hash;
        
    //     // Scroll to the element with the corresponding id
    //     if (hash) {
    //       const element = document.getElementById(hash.substring(1));
    //       if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     }
    //   }, []);

    return (
        <div id="about" className="about">
            <WorkExperince/>
            <WhyHire/>
        </div>
    );
}

export default About;