import React from "react";
import '../../index.css';
import './Testimonials.css';
import hair3 from '../Images/hair3.png';
import whitestar from '../Images/white star.png';
import star from '../Images/Star.svg';
import graystar from '../Images/grayStar.svg';
import quotedown from '../Images/quote-down.png';
import review1 from '../Images/testimonial-1.png';
import review2 from '../Images/testimonial-2.png';
import review3 from '../Images/testimonial-3.png';
import review4 from '../Images/testimonial-4.png';
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
                <p>Discover what clients are saying about our exceptional services. From captivating animations to seamless responsiveness, our portfolio speaks volumes. Explore the testimonials below to see how we've transformed visions into stunning realities for satisfied clients.</p>
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
            depth: 50,
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
                    <p>He is currently helping me build my website for stockverse.ai and was attentive to details in the beginning process</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review2} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>Working with them on my website was an absolute pleasure! His expertise in creating stunning animations brought my vision to life in ways I couldn't have imagined. Not only did he deliver on the animations, but the site's responsiveness across devices is seamless. John's attention to detail and dedication to excellence truly shine through in his work. I highly recommend him to anyone looking for a top-notch web developer.</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review3} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={graystar} alt="logo" />
                        <p>4.0</p>
                    </div>
                    <p>They are true master of their craft! Their expertise in animation and responsive design transformed my website into a visually stunning and user-friendly experience. Throughout the development process, They were incredibly communicative and receptive to my feedback, ensuring that the final product met my expectations perfectly. I couldn't be happier with the results, and I've already seen an increase in engagement on my site since its launch. If you're searching for a developer who can elevate your online presence, They are the one to call!</p>
                </SwiperSlide>
                <SwiperSlide className="testimonials-slide">
                    <img className="quote-down" src={quotedown} alt="quote"/>
                    <img className="reviewer" src={review4} alt="logo" />
                    <div className="rating">
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <img src={star} alt="logo" />
                        <p>5.0</p>
                    </div>
                    <p>I am beyond thrilled with the animation and responsive site that they created for me. From the initial concept discussions to the final product, their professionalism and creativity were evident every step of the way. Their ability to translate my ideas into captivating animations exceeded my expectations. The site looks fantastic on all devices, and I've received numerous compliments on its design. If you're in need of a talented web developer who can bring your vision to life, look no further than them!</p>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default Testimonials;