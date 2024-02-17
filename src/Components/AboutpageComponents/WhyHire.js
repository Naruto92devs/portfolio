import React, { useEffect } from 'react';
import '../../index.css';
import './WhyHire.css';
import whyme from '../Images/why-me1.png'
import rings from '../Images/rings.png'


const WhyHire = () => {

    const hireMe = () => {
        const rings = document.getElementById('rings');
        rings.classList.add("active");
    }
    const notMe = () => {
        const rings = document.getElementById('rings');
        rings.classList.remove("active");
    }

    useEffect(() => {
        // Get the hash fragment from the URL
        const hash = window.location.hash;
        
        // Scroll to the element with the corresponding id
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);


    return (
        <div className="WhyHire" id="hireme">
            <div className="left">
                <img className="img1" src={whyme} alt="logo"/>
                <img id="rings" className="img2" src={rings} alt="logo"/>
            </div>
            <div className="right">
                <h2>
                    <span className="span1">Why </span>
                    <span>Hire me </span>
                    <span className="span1">?</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
                </p>
                <div className="achievements">
                    <div className="left">
                        <h3>450+</h3>
                        <p>Project Completed</p>
                    </div>
                    <div className="left">
                        <h3>450+</h3>
                        <p>Project Completed</p>
                    </div>
                </div>
                <a onMouseEnter={hireMe} onMouseLeave={notMe}
                 id="hireme" href="#hello">
                    Hire me
                </a>
            </div>
        </div>
    );
}

export default WhyHire;