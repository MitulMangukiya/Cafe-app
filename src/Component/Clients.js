import React, { useState } from 'react';
import './Clients.css'
import quote from '../images/quote.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Clients = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slidesData = [
        {
          id: 1,
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'Armani Murry'
        },
        {
          id: 2,
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'Celestine Dietrich'
        },
        {
          id: 3,  
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'Madisyn Dooley'
        },
        {
          id: 4,
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'John Doe'
        },
        {
          id: 5,
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'Natasha Sonin'
        },
        {
          id: 6,  
          imgSrc: quote, 
          description: '"Adipisicing elit. Ratione, sequi consequuntur? Unde, deleniti ad? Optio, quam nobis. Quis, corrupti voluptas. Perspiciatis, dolorem consequuntur consequatur nam ea vero velit aut."',
          title: 'Peter Loki'
        }
      ];

      const totalSlides = slidesData.length;
    
  return (
    <div className='client text-white 2xl:container mx-auto sm:pb-16 pb-4'>
        <div className='text-center pb-4 sm:pt-20 pt-10'>
            <p className='text-3xl pt-1.5 font-custom2 px-6'>In The Words Of Our Clients</p>
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
                    <div className='p-4 bg-white text-black w-80 sm:w-auto mx-auto'>
                        <div className='sm:w-auto w-72 mx-auto border-[1px] border-yellow-500 text-center'>
                            <div className='flex justify-center py-7'><img src={slide.imgSrc} className='' alt="quote" /></div>
                            <p className='text-gray-400 text-sm px-4'>{slide.description}</p>
                            <p className='p-4'>- {slide.title}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))} 
            </Swiper>
        </div>

        <div className="hidden sm:visible pt-6 sm:flex justify-center">
            <div className="w-44 bg-gray-600 h-1">
                <div className="bg-white h-1" style={{ width: `${((activeIndex + 1) / totalSlides) * 150}%` }}></div>
            </div>
        </div>
    </div>
  )
}

export default Clients