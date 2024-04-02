import React from "react";
import '../../index.css';
import { Link } from "react-router-dom";
import Slideimage from '../../Components/Images/slide-img.jpg';
import service1 from '../../Components/Images/service1.jpeg';
import service2 from '../../Components/Images/service2.jpeg';
import service3 from '../../Components/Images/service3.jpeg';
import service4 from '../../Components/Images/service4.jpeg';
import service5 from '../../Components/Images/service5.jpeg';
import service6 from '../../Components/Images/service6.jpeg';
import service7 from '../../Components/Images/service7.jpeg';
import arrow from '../../Components/Images/arrow up right.svg';
import nugget1 from '../../Components/Images/nugget1.png';
import nugget2 from '../../Components/Images/nugget2.png';
import nugget3 from '../../Components/Images/nugget3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';
import '../../Components/HomePageComponents/Services.css';
import './Service.css';


const Service = () => {

    const serivesettings = {
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
            slidesPerView: 2,
            spaceBetween:25, // 2 slides per view on screens >= 300px
          },
          980: {
            slidesPerView: 3,
            spaceBetween:50, // 3 slides per view on screens >= 980px
          },
          1600: {
            slidesPerView: 3.5,
            spaceBetween:50, // 3 slides per view on screens >= 1600px
          },
        },
      };

    return (
        <div className="services service" id="service">
            <img className="nugget1" src={nugget1} alt="logo"/>
            <img className="nugget2" src={nugget2} alt="logo"/>
            <img className="nugget3" src={nugget3} alt="logo"/>
            <div className="heading">
                <h2>Our <span>Services</span></h2>
                <p>Transforming pixels into captivating experiences – where innovation meets impeccable design. Elevate your digital presence with our frontend mastery.</p>
            </div>
            <Swiper
            {...serivesettings}
            // spaceBetween={80}
            loop={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Websites</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service1} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>React Apps</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service2} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Ecommerce</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service3} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Animation Websites</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service4} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Web Applications</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service5} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Vector Art Websites</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service6} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <Link to='/projects'>
                        <div className="head">
                            <h3>Whitepapers</h3>
                        </div>
                        <div className="content">
                            <div className="drop1 scale"></div>
                            <div className="drop2 scale"></div>
                            <img className="service-img scale" src={service7} alt="logo"/>
                            <img className="arrow" src={arrow} alt="logo"/>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Service;