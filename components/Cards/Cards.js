import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function Cards() {
  return (
    <div className='mycontainer'>
      <Swiper
        slidesPerView={1.1}
        navigation
        // effect={'fade'}
        centeredSlides={true}
        modules={[Navigation, EffectFade]}
        speed={800}
        grabCursor={true}
        loop
        spaceBetween={20}
        className='myswiper'
      >
        <SwiperSlide className='swiperslide'>
          <img
            src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/11/visiting-orlando-players.jpg?imwidth=1000&imheight=638'
            alt=''
          />
          <p>SEE YOUR FAVORITE NBA PLAYERS IN ACTION</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/11/drumline_small.jpg?imwidth=640&imheight=408' alt='' />
          <p>AMAZING HALFTIME ENTERTAINMENT</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img
            src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/11/Amway-Center-Lightshows.jpg?imwidth=1000&imheight=638'
            alt=''
          />
          <p>LIGHT AND VIDEO SHOWS</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/11/Jernigans-Restaurant.jpg?imwidth=1000&imheight=638' alt='' />
          <p>9 UNIQUE BARS & RESTAURANTS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
