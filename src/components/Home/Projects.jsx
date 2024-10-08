import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from '../../portfolio';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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

export default function Projects() {
  return (
    <>
        
        <div className='relative isolate overflow-hidden py-40 sm:py-32 lg:py-64 lg:scroll-py-60 bgimg-1'>
        <h2 className="text-3xl py-10 font-bold tracking-tight text-white sm:text-4xl">Personal Projects</h2>    
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent to-black h-full w-full pointer-events-none"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black h-full w-full pointer-events-none"></div>
            
            
            <div className="swiper-button-prev" id="swiper-button-prev"></div>
            <div className="swiper-button-next" id="swiper-button-next"></div>
            <Swiper
                effect={'coverflow'}
                // grabCursor={true}
                navigation={{
                    prevEl: '#swiper-button-prev',
                    nextEl: '#swiper-button-next',
                  }}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 20,
                stretch: -200,
                depth: 150,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper custom-height-swiper"
            >
                {skills.data[0].projects.map((project) => {
                    return (
                        <div key={project.projectname}>
                            <SwiperSlide>
                                <div className="card card-compact bg-slate-950 h-full w-full shadow-xl">
                                    <figure className='relative'> 
                                        
                                        <div className="absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-black h-1/2 w-full pointer-events-none"></div>
            
                                        <img
                                        src= {project.projectimage}
                                        alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.projectname}</h2>
                                        <p>{project.about}</p>
                                        <div className="card-actions pt-8 justify-between">
                                            <div className='justify-start'>
                                                <ul>
                                                    {project.technologies.map((tech) => {
                                                        const foundtech = skills.data[0].softwareSkills.find((el) => el.skillName === tech);
                                                        if (!foundtech) return null;
                                                        return (
                                                                <li className="icons-inline pb-2" name={foundtech.skillName}>
                                                                    {foundtech.svg}
                                                                </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className='justify-end'>
                                                <ul>
                                                    {project.demolink ? (
                                                        <li className='icons-inline pb-2'>
                                                            <a href={project.demolink} target='_blank'>
                                                                <svg 
                                                                    xmlns="http://www.w3.org/2000/svg" 
                                                                    width="4em" 
                                                                    height="4em" 
                                                                    className='icons'
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path fill="white" fill-rule="evenodd" d="M8.5 1a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m4.894 4a5.53 5.53 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676zm.582 2.995A5 5 0 0 0 14 7.5a5.5 5.5 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10 10 0 0 1-.206 2h2.493q.142-.494.19-1.005zm-3.535 0l.006-.051A9 9 0 0 0 10.5 7a9 9 0 0 0-.076-1H6.576A9 9 0 0 0 6.5 7a9 9 0 0 0 .233 2h3.534q.115-.498.174-1.005M10.249 5a9 9 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a4 4 0 0 0-.312.015l-.182.015L8 2.04A9 9 0 0 0 6.751 5zM5.706 5a10 10 0 0 1 .966-2.681A5.53 5.53 0 0 0 3.606 5zM3.213 6A5.5 5.5 0 0 0 3 7.5A5.5 5.5 0 0 0 3.213 9h2.493A10 10 0 0 1 5.5 7c0-.336.023-.669.055-1zm2.754 4h-2.36a5.52 5.52 0 0 0 3.819 2.893A10 10 0 0 1 5.967 10M8.5 12.644A9 9 0 0 0 9.978 10H7.022A9 9 0 0 0 8.5 12.644M11.033 10a10 10 0 0 1-1.459 2.893A5.52 5.52 0 0 0 13.393 10z" clip-rule="evenodd" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    ): null}
                                                    {project.projectlink ? (
                                                        <li className='icons-inline pb-2'>
                                                            <a href={project.projectlink} target='_blank'>
                                                                <svg 
                                                                    xmlns="http://www.w3.org/2000/svg" 
                                                                    width="4em" 
                                                                    height="4em" 
                                                                    className='icons'
                                                                    viewBox="0 0 24 24"
                                                                    >
                                                                    <path fill="white" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14a.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028a1.83 1.83 0 0 0-.542-.875a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284a2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604q0-.392-.09-.773a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26a7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.342a4.5 4.5 0 0 0-.705-.261a2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.763q-.08.382-.081.773q0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.3a2.9 2.9 0 0 1-.752-.824a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343a1.8 1.8 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333q.169.148.3.33q.136.178.231.381q.11.2.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    ) : null}
                                                </ul>
                                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    </>
  );
}
