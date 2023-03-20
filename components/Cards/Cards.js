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
        slidesPerView={1.2}
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
