import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Cards() {
  return (
    <div className='mycontainer'>
      <Swiper
        slidesPerView={1.75}
        // navigation
        pagination
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        // speed={800}
        grabCursor={true}
        // loop
        spaceBetween={50}
        className='myswiper'
      >
        <SwiperSlide className='swiperslide'>
          <img
            src='https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzNDA2OTUzODk0OTc5NDkx/usa_today_19332954.jpg'
            alt=''
          />
          <p>SEE YOUR FAVORITE NBA PLAYERS</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img
            src='https://visitorlando.widen.net/content/dejpnbc0jr/jpeg/5818_2020omagic_pregame_stuff.jpg?crop=true&keep=c&q=80&color=ffffffff&u=lt4yfq&w=1920&h=1252&quality=80'
            alt=''
          />
          <p>AMAZING HALFTIME ENTERTAINMENT</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/08/careers-header-bg.jpg' alt='' />
          <p>LIGHT AND VIDEO SHOWS</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img
            src='https://tranthomasdesign.com/wp-content/uploads/2019/06/Orlando-Florida-Suite-Sports-Arena-Blue-Accents-Acrylic-Privacy-Panels-1700x1131.jpg'
            alt=''
          />
          <p>9 UNIQUE BARS & RESTAURANTS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
