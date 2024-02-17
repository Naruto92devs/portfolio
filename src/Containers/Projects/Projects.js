import React, { useState } from 'react';
import '../../index.css';
import './Projects.css';

const Projects = () => {

    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);

    const toggleExpansion1 = () => {
      setIsExpanded1((prevExpanded) => !prevExpanded);
      if (isExpanded1) {
        const btn1 = document.getElementById('btn1');
        btn1.textContent = "See All"
        btn1.style.background = "#FD853A"
        } else {
            const btn1 = document.getElementById('btn1');
            btn1.textContent = "See Less"
            btn1.style.background = "#1D2939"
        }
    };
    const toggleExpansion2 = () => {
      setIsExpanded2((prevExpanded) => !prevExpanded);
      if (isExpanded2) {
        const btn1 = document.getElementById('btn2');
        btn1.textContent = "See All"
        btn1.style.background = "#FD853A"
        } else {
            const btn1 = document.getElementById('btn2');
            btn1.textContent = "See Less"
            btn1.style.background = "#1D2939"
        }
    };
    const toggleExpansion3 = () => {
      setIsExpanded3((prevExpanded) => !prevExpanded);
      if (isExpanded3) {
        const btn1 = document.getElementById('btn3');
        btn1.textContent = "See All"
        btn1.style.background = "#FD853A"
        } else {
            const btn1 = document.getElementById('btn3');
            btn1.textContent = "See Less"
            btn1.style.background = "#1D2939"
        }
    };
    const toggleExpansion4 = () => {
        setIsExpanded4((prevExpanded) => !prevExpanded);
        if (isExpanded4) {
          const btn1 = document.getElementById('btn4');
          btn1.textContent = "See All"
          btn1.style.background = "#FD853A"
          } else {
              const btn1 = document.getElementById('btn4');
              btn1.textContent = "See Less"
              btn1.style.background = "#1D2939"
          }
    };
    const toggleExpansion5 = () => {
        setIsExpanded5((prevExpanded) => !prevExpanded);
        if (isExpanded5) {
          const btn1 = document.getElementById('btn5');
          btn1.textContent = "See All"
          btn1.style.background = "#FD853A"
          } else {
              const btn1 = document.getElementById('btn5');
              btn1.textContent = "See Less"
              btn1.style.background = "#1D2939"
          }
    };
  
    return (
        <div className='my-work'>
            <div className={`divisions ${isExpanded1 ? 'expanded1' : 'collapsed'}`}>
                <div className="controls">
                    <h2>
                        <span className="span1">1. Landing-page </span>
                        <span>Projects</span>
                    </h2>
                    <a href="#home" id='btn1' className="btn1" onClick={toggleExpansion1}>
                        See All
                    </a>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </div>
            <div className={`divisions ${isExpanded2 ? 'expanded1' : 'collapsed'}`}>
                <div className="controls">
                    <h2>
                        <span className="span1">2. Product Design </span>
                        <span>Projects</span>
                    </h2>
                    <a href="#home" id='btn2' onClick={toggleExpansion2} className="btn1">
                        See All
                    </a>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </div>
            <div className={`divisions ${isExpanded3 ? 'expanded1' : 'collapsed'}`}>
                <div className="controls">
                    <h2>
                        <span className="span1">3. Animation </span>
                        <span>Projects</span>
                    </h2>
                    <a href="#home" id='btn3' onClick={toggleExpansion3} className="btn1">
                        See All
                    </a>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </div>
            <div className={`divisions ${isExpanded4 ? 'expanded1' : 'collapsed'}`}>
                <div className="controls">
                    <h2>
                        <span className="span1">4. Glassmorphism </span>
                        <span>Projects</span>
                    </h2>
                    <a href="#home" id='btn4' onClick={toggleExpansion4} className="btn1">
                        See All
                    </a>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </div>
            <div className={`divisions ${isExpanded5 ? 'expanded1' : 'collapsed'}`}>
                <div className="controls">
                    <h2>
                        <span className="span1">5. Vector Art </span>
                        <span>Projects</span>
                    </h2>
                    <a href="#home" id='btn5' onClick={toggleExpansion5} className="btn1">
                        See All
                    </a>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
                <div className="slide">
                    <p className="arrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;