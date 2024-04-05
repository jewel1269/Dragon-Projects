import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Style/Style.css';
import Sports from './../Sports/Sports';

const Slider = ({ sports }) => {
    
    return (
        <> <h1 className='text-center mt-14'>Top News</h1>
        <Swiper style={{height: 500}}
        
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {
                sports.map(item => <SwiperSlide key={item.id}>
                    <Sports data={item}></Sports>
                </SwiperSlide>)
            }

        </Swiper>
        </>
    );
};

export default Slider;