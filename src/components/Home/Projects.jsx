import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from '../../portfolio';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import './Home.css'

// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Tmpprojects from '../Projects/tmpprojects';

export default function Projects() {
  return (
    <>
        
        <div className='relative isolate overflow-hidden py-40 sm:py-32 lg:py-64 lg:scroll-py-60 bgimg-1'>
        <h2 className="text-3xl py-10 font-bold tracking-tight text-white sm:text-4xl">PERSONAL PROJECTS</h2>    
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent to-black h-full w-full pointer-events-none"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black h-full w-full pointer-events-none"></div>
            
            <Tmpprojects/>
            

        </div>
    </>
  );
}
