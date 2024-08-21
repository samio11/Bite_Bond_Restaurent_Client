
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ForSlider from '../ReusableComponent/ForSlider';

const SliderPart = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ForSlider heading={'Exquisite Dining Experience'} content={'Indulge in a world of flavors crafted by our master chefs. From locally sourced ingredients to international delicacies, we bring you a culinary experience that delights your senses. Join us for an unforgettable meal in a warm and welcoming ambiance.'} images={'slide1.svg'}></ForSlider>
                </SwiperSlide>
                <SwiperSlide>
                    <ForSlider heading={'Farm-to-Table Freshness'} content={'Taste the difference with every bite. Our commitment to sustainability means that we only serve the freshest ingredients, sourced directly from local farms. Experience the vibrant flavors of farm-to-table dining at its finest.'} images={'slide2.svg'}></ForSlider>
                </SwiperSlide>
                <SwiperSlide>
                    <ForSlider heading={'Crafted by Culinary Masters'} content={'Meet our world-class chefs, who bring passion and creativity to every dish. With years of experience and a love for culinary artistry, they transform fresh ingredients into gourmet masterpieces. Enjoy a dining experience crafted with skill, precision, and a personal touch from our talented kitchen team.'} images={'slide3.svg'}></ForSlider>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderPart;