import React from 'react';
import cafe from '../images/cafe.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import cafebg from '../images/bgcafe.png';
import Ourstory from './Ourstory';
import Service from './Service';
import Menucards from './Menucards';
import Form from './Form';
import Team from './Team';
import Clients from './Clients';
import Blogs from './Blogs';
import Gallery from './Gallery';

const Home = () => {

  const slideimg = [
    {
      id: 1,
      img: cafebg,
    },
    {
      id: 2,
      img: cafebg,
    },
    {
      id: 3,
      img: cafebg,
    }
  ]

  const totalslides = slideimg.length;

  return (
    <>
      <div className="2xl:container mx-auto sm:h-auto h-80 flex justify-center">
        <div className='absolute 2xl:top-[370px] xl:top-[340px] lg:top-72 md:top-56 sm:top-52 top-52 w-fit px-4 sm:px-0 text-white z-10 text-center container'>
          <p className='lg:text-5xl md:text-3xl text-2xl font-custom text-yellow-500'>Welcome to Oneline</p>
          <p className='lg:text-5xl md:text-3xl text-2xl pt-3 font-custom2'>Feel the Authentic & Taste From Us</p>
          <div className='flex justify-center pt-3 gap-3'>
            <p><hr className='border-yellow-600 py-2 px-7 relative top-3'/></p>
            <div><img src={cafe} alt="cafe" className='mx-auto'/></div>
            <p><hr className='border-yellow-600 py-2 px-7 relative top-3'/></p>
          </div>
          <p className='text-sm pt-3'>18 Years to Master, Yours to Savor</p>
          <button className='border-2 rounded-sm px-2 py-1 mt-3 shadow-lg'>Book a Table</button>
        </div>

        <Swiper
          loop={true}
          className="mx-auto"
        >
        {slideimg.map((slide, index)=>(
          <SwiperSlide className='2xl:container mx-auto'>
              <img key={index} src={slide.img} alt={`Slide-${slide.id}`} className='h-full sm:h-auto'/>
              <p className='absolute sm:bottom-10 bottom-5 sm:right-20 right-5 text-white font-custom2 text-xl'>{slide.id} / {totalslides}</p>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      <Ourstory/>
      <Service/>
      <Menucards/>
      <Form/>
      <Team/>
      <Clients/>
      <Blogs/>
      <Gallery/>
    </>
  );
};

export default Home;
