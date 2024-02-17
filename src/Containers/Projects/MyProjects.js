import React, { useEffect } from 'react';
import '../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';
import './MyProjects.css';

const MyProjects = () => {

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

    const MyProjectsSlider = {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween:80, // 2 slides per view on screens >= 0px
          },
          300: {
            slidesPerView: 1.1,
            spaceBetween:25, // 2 slides per view on screens >= 300px
          },
          600: {
            slidesPerView: 2.3,
            spaceBetween:50, // 3 slides per view on screens >= 980px
          },
          980: {
            slidesPerView: 2.6,
            spaceBetween:50, // 3 slides per view on screens >= 980px
          },
          1600: {
            slidesPerView: 3.2,
            spaceBetween:50, // 3 slides per view on screens >= 1600px
          },
        },
      };

      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank');
        newWindow.focus();
      };
  
    return (
        <div className='my-projects'>
            <div id='catagory1' className="catagory catagory1">
                <div className="slider-heading">
                    <h2>
                        <span className="span1">1. Glassmophism </span>
                        <span>Projects</span>
                    </h2>
                </div>
                <Swiper
                {...MyProjectsSlider}
                // spaceBetween={80}
                rewind={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySlider"
                >
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/xavier/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Xavier</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/guardian/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Guardian AI</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/medco/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Medco</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/kyd/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>KYD</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/blink/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Blink</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/telesniper/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Telegram Sniper</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/tg-ai/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Meta TG-AI</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/shockey/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Shockey</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div id='catagory2' className="catagory catagory2">
                <div className="slider-heading">
                    <h2>
                        <span className="span1">2. Vector Art </span>
                        <span>Projects</span>
                    </h2>
                </div>
                <Swiper
                {...MyProjectsSlider}
                // spaceBetween={80}
                rewind={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySlider"
                >
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/oryx/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Oryx</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/madbee/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Mad Bee</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/nfa2.0/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Nfa 2.0</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/yoshi/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Yoshi</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/realpepe/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Real Pepe</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/bobo-bear/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>BoBo Bear</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/drakey/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Drakey</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/pepoodle/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Pepoodle</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/bahamas/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Bahamas</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div id='catagory3' className="catagory catagory3">
                <div className="slider-heading">
                    <h2>
                        <span className="span1">3. Animation </span>
                        <span>Projects</span>
                    </h2>
                </div>
                <Swiper
                {...MyProjectsSlider}
                // spaceBetween={80}
                rewind={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySlider"
                >
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/first-republic/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Crypto Republic</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/alien/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Alien</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/btcmanagement/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Btc Management</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/ghost/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Ghost</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/mr-bridge/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>mr. Bridge</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/snake/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Snakeerc</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/xai/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Xai</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/harry-porter/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Harry Porter</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div id='catagory4' className="catagory catagory4">
                <div className="slider-heading">
                    <h2>
                        <span className="span1">4. Landiong Page </span>
                        <span>Projects</span>
                    </h2>
                </div>
                <Swiper
                {...MyProjectsSlider}
                // spaceBetween={80}
                rewind={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySlider"
                >
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/two-lands/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Two Lands</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/ggbond/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>GG Bond</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/siphon/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Siphon</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/antis-inu/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Shiba Inu</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/boostfx/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Boostfx</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>           
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/chaintools/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Chaintools</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/telebot/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Tele Bot</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/dashboard-design/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Dashboard</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div id='catagory5'  className="catagory catagory5">
                <div className="slider-heading">
                    <h2>
                        <span className="span1">5. Meme Coin </span>
                        <span>Projects</span>
                    </h2>
                </div>
                <Swiper
                {...MyProjectsSlider}
                // spaceBetween={80}
                rewind={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySlider"
                >
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/ewin/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>EWIN</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/redpepe/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Red Pepe</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/hoppy/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Hoppy</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/tadpole/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Tadpole</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/solonka/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Solonka</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/shibanon/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Shibanon</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/pogex/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Pogex</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/stewie/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Stewie Griffin</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/brrr/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>BRRR</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => openInNewTab('https://naruto92devs.github.io/goat/')} id='slide-bg' className="my-project-slide">
                        <p className="orangearrow">&rarr;</p>
                        <div className="detail">
                            <h4>Goat</h4>
                            <p>Click to visit the Project &#8599;</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
}

export default MyProjects;