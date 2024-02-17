import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import '../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';
import './ProjectSlider.css';

const ProjectSlider = () => {

    const swiperSetting = {
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

      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };
  
    return (
        <div className="project-slider">
            <div className="project-slider-heading">
                <h2>
                    <span className="span1">Lets have a look at my </span>
                    <span>Projects</span>
                </h2>
                <Link to='/projects' className="btn1">
                    See All
                </Link>
            </div>
            <Swiper
            {...swiperSetting}
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
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            >
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Bahamas</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Real pepe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Siphon</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Nfa 2.0</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Pepoodle</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Ghost</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Dashboard</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Alien</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Drakey</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>Btc Mangement</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide id='slide-bg' className="swiper-project-slide">
                    <p className="orangearrow">&rarr;</p>
                    <div className="detail">
                        <h4>GG Bond</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
                
            </Swiper>
            <div className="catagories">
                <Link to='/projects#catagory1'>
                    <p>Landing Page</p>
                </Link>
                <Link to='/projects#catagory2'>
                    <p>Product Design</p>
                </Link>
                <Link to='/projects#catagory3'>
                   <p> Animation</p>
                </Link>
                <Link to='/projects#catagory4'>
                    <p>Glassmorphism</p>
                </Link>
                <Link to='/projects#catagory5'>
                    <p>Cards</p>
                </Link>
            </div>
        </div>
    );
}

export default ProjectSlider;