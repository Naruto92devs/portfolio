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
                    <span>Choose Us </span>
                    <span className="span1">?</span>
                </h2>
                <p>
                Choose Us for unparalleled expertise in frontend development. With a proven track record of delivering cutting-edge solutions, We bring creativity, precision, and a commitment to excellence to every project, ensuring your digital success.
                </p>
                <div className="achievements">
                    <div className="left">
                        <h3>350+</h3>
                        <p>Project Completed</p>
                    </div>
                    <div className="left">
                        <h3>200+</h3>
                        <p>Crypto Coin Projects</p>
                    </div>
                </div>
                <a onMouseEnter={hireMe} onMouseLeave={notMe}
                 id="hireme" href="https://t.me/Naruto92devs">
                    Telegram
                </a>
            </div>
        </div>
    );
}

export default WhyHire;