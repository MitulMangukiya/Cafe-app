import React, { useState } from 'react';
import './Service.css'
import holidayparies from '../images/holidayparies.svg'
import anniversary from '../images/anniversaries.svg'
import birthday from '../images/birthday.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Service = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slidesData = [
        {
          id: 1,
          imgSrc: holidayparies, 
          title: 'Holiday Parties',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        },
        {
          id: 2,
          imgSrc: anniversary, 
          title: 'Anniversaries',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        },
        {
          id: 3,  
          imgSrc: birthday, 
          title: 'Birthday Parties',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        },
        {
          id: 4,
          imgSrc: holidayparies, 
          title: 'Holiday Parties',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        },
        {
          id: 5,
          imgSrc: anniversary, 
          title: 'Anniversaries',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        },
        {
          id: 6,  
          imgSrc: birthday, 
          title: 'Birthday Parties',
          description: 'Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut.'
        }
      ];

      const totalSlides = slidesData.length;
    
  return (
    <div className='service text-white 2xl:container mx-auto sm:pb-16 pb-4'>
        <div className='text-center pb-4 sm:pt-20 pt-10'>
            <p className='text-yellow-500 text-sm'>OUR SERVICES</p>
            <p className='text-3xl pt-1.5 font-custom2'>We Hold Events</p>
        </div>

        <div className='p-10 pt-6 sm:px-12 px-4 '>
            <Swiper
                spaceBetween={30}
                className="mx-auto"
                breakpoints={{
                    640: {
                      slidesPerView: 2, 
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className='pt-12'>
                        <div className='sm:w-auto w-72 mx-auto border-[1px] border-yellow-500 text-center'>
                            <div className='flex justify-center'><img src={slide.imgSrc} className='relative bottom-12' alt={slide.title.toLowerCase()} /></div>
                            <p className='text-yellow-500 text-3xl px-4 py-5 pt-0 relative bottom-6 font-custom2'>{slide.title}</p>
                            <p className='px-4 pb-0 relative bottom-6'>{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))} 
            </Swiper>
        </div>

        <div className="hidden 2xl:visible pt-6 sm:flex justify-center">
            <div className="w-44 bg-gray-600 h-1">
                <div className="bg-white h-1" style={{ width: `${((activeIndex + 1) / totalSlides) * 150}%` }}></div>
            </div>
        </div>
    </div>
  )
}

export default Service