import React from "react";
import '../../index.css';
import './Testimonials.css';
import hair3 from '../Images/hair3.png';
import whitestar from '../Images/white star.png';
import star from '../Images/Star.svg';
import quotedown from '../Images/quote-down.png';
import review1 from '../Images/testimonial-1.png';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const Testimonials = () => {
  
    const testimonialsettings = {
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
            slidesPerView: 1.7,
            spaceBetween:50, // 3 slides per view on screens >= 980px
          },
          980: {
            slidesPerView: 1.9,
            spaceBetween:50, // 3 slides per view on screens >= 980px
          },
        },
      };

    return (
        <div className="testimonials">
            <div className="testimonial-heading">
                <img className="hair3" src={hair3} alt="logo"/>
                <img className="star1" src={whitestar} alt="logo"/>
                <img className="star2" src={whitestar} alt="logo"/>
                <h2>Testimonials That <br/> Speak to <span>My Results</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
            </div>
            <Swiper
            {...testimonialsettings}
            effect={'coverflow'}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            // slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 80,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonial-slider"
            >
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review1} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review1} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review1} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review1} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.</p>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default Testimonials;