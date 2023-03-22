import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Cards() {
  return (
    <section className='mycontainer'>
      <h1 className='swipe-header'>Enter the world of award-winning entertainment at the Amway Center.</h1>
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
            src='https://tranthomasdesign.com/wp-content/uploads/2019/06/Orlando-Florida-Suite-Sports-Arena-Blue-Accents-Acrylic-Privacy-Panels-1700x1131.jpg'
            alt=''
          />
          <p>9 UNIQUE BARS & RESTAURANTS</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/04/team-shop-21.jpg' alt='' />
          <p>Official Team Shop</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://www.orlandoattractions.com/2019/wp-content/uploads/2019/07/Magis-StuffsCastle.jpg' alt='' />
          <p>Stuff's Magic Castle</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://cdn.nba.com/teams/uploads/sites/1610612753/2022/06/01-founders_suite_1.jpg' alt='' />
          <p>VIP Seating and Luxury Suites</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src='https://www.sportsbusinessjournal.com/-/media/Images/Daily/2022/03/14/MB-Amway-Center/Magic-2.ashx' alt='' />
          <p>Interactive areas for the entire family</p>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img
            src='https://www.attractiontickets.com/sites/default/files/styles/news_content_desktop/public/2022-09/orlando-magic-fans.jpg?itok=xiODcuCx'
            alt=''
          />
          <p>Exclusive discounts for groups of 10+</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
