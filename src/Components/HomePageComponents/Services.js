import React from "react";
import '../../index.css';
import Slideimage from '../Images/slide-img.jpg';
import arrow from '../Images/arrow up right.svg';
import nugget1 from '../Images/nugget1.png';
import nugget2 from '../Images/nugget2.png';
import nugget3 from '../Images/nugget3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { FreeMode, Pagination } from 'swiper/modules';
import './Services.css';


const Services = () => {

    const serivesettings = {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween:80, // 2 slides per view on screens >= 0px
          },
          300: {
            slidesPerView: 1.4,
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
            slidesPerView: 4,
            spaceBetween:50, // 3 slides per view on screens >= 1600px
          },
        },
      };

    return (
        <div className="services" id="service">
            <img className="nugget1" src={nugget1} alt="logo"/>
            <img className="nugget2" src={nugget2} alt="logo"/>
            <img className="nugget3" src={nugget3} alt="logo"/>
            <div className="heading">
                <h2>My <span>Services</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</p>
            </div>
            <Swiper
            {...serivesettings}
            // spaceBetween={80}
            loop={true}
            // freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            >
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Websites</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>React Apps</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Ecommerce</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Animation Websites</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Web Applications</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Vector Art Websites</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="services-slide">
                    <div className="head">
                        <h3>Whitepapers</h3>
                    </div>
                    <div className="content">
                        <div className="drop1 scale"></div>
                        <div className="drop2 scale"></div>
                        <img className="service-img scale" src={Slideimage} alt="logo"/>
                        <img className="arrow" src={arrow} alt="logo"/>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
}

export default Services;