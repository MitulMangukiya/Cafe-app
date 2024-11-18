import React from 'react'
import './Menupage.css'
import Meal1 from '../images/menu/menu1.png'
import Meal2 from '../images/menu/menu2.png'
import Meal3 from '../images/menu/menu3.png'
import Meal4 from '../images/menu/menu4.png'
import Meal5 from '../images/menu/menu5.png'
import Meal6 from '../images/menu/menu6.png'
import Meal7 from '../images/menu/menu7.png'
import commonicon from '../images/services/commonicon.svg'
import commoniconwhite from '../images/services/commoniconwhite.svg'
import smi1 from '../images/menu/smi1.png'
import smi2 from '../images/menu/smi2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Menu = ( props ) => {

  const Meal = [
    {
        id: 1,
        img: Meal1,
        name: "Starters" 
    },
    {
        id: 2,
        img: Meal2,
        name: "BreakFast" 
    },
    {
        id: 3,
        img: Meal3,
        name: "Lunch" 
    },
    {
        id: 4,
        img: Meal4,
        name: "Dinner" 
    },
    {
        id: 5,
        img: Meal5,
        name: "Desserts" 
    },
    {
        id: 6,
        img: Meal6,
        name: "Coffee" 
    },
    {
        id: 7,
        img: Meal7,
        name: "Mocktails" 
    }
  ]

  const starters = [
    { name: 'Harum Deunt Exercitationem', price: '$10' },
    { name: 'Deleniti Nemo Molestiae', price: '$90' },
    { name: 'Ut Laudantium Eum', price: '$210' },
    { name: 'Numquam Esse Molestias', price: '$20' },
    { name: 'Distinctio Non Quas', price: '$100' },
    { name: 'Veniam Ut Aut', price: '$250' },
    { name: 'Iste Ut Sit', price: '$90' },
    { name: 'Sit Consequatur Qui', price: '$30' },
    { name: 'Eos Et Quas', price: '$40' },
    { name: 'Est Temporibus Enim', price: '$10' },
  ];

  return (
      <>
      <div className='2xl:container mx-auto'>
 
        <div className='relative'>
            <img src={props.bg} alt='menu-bg' className='w-full h-80'/>
            <div className='text-center absolute flex flex-col justify-center text-white top-0 w-full h-full' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <p className='font-custom2 text-4xl text-yellow-500 pb-2'>{props.title}</p>
                <p className='text-sm'>{props.description}</p>
            </div>
        </div>

        {/* Meal Types name */}
        <div className='flex flex-wrap lg:flex-nowrap gap-5 lg:justify-between justify-around sm:px-12 px-4 sm:py-20 py-10'>
            {Meal.map((meals, index)=> (
                <div key={index} className='relative'>
                    <img src={meals.img} alt={meals.name}/>
                    <div className='absolute w-full h-full top-0 flex flex-col justify-center' style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                        <p className='text-white font-semibold mx-auto'>{meals.name}</p>
                    </div>
                </div>      
            ))} 
        </div>

        {/* Starters */}
        <div className='sm:px-12 px-4'>
            <div className='text-center'>
                <p className='text-3xl pb-1 text-yellow-600 font-mono'>STARTERS</p>
                <img src={commonicon} className='w-24 mx-auto'/>
            </div>

            <div className='py-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 font-custom2 '>

            {starters.map((item, index) => (
                <div key={index} className='md:text-2xl'>
                    <div>
                        <div className='flex gap-2 justify-between'>
                            <p>{item.name}</p>
                            <div className='flex-grow border-b-[2px] md:h-6 h-5 border-dotted border-gray-800'></div>
                            <p>{item.price}</p>
                        </div>
                        <p className='text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* lunch */}
        <div className='lunch text-white sm:px-12 px-4 py-14'>
            <div className='text-center'>
                <p className='text-3xl pb-1 text-yellow-600 font-mono'>LUNCH</p>
                <img src={commoniconwhite} className='w-20 mx-auto text-white'/>
            </div>

            <div className='pt-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 font-custom2 '>

            {starters.map((item, index) => (
                <div key={index} className='md:text-2xl'>
                    <div>
                        <div className='flex gap-2 justify-between'>
                            <p>{item.name}</p>
                            <div className='flex-grow border-b-[2px] md:h-6 h-5 border-dotted border-white'></div>
                            <p>{item.price}</p>
                        </div>
                        <p className='text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* dinner */}
        <div className='sm:px-12 px-4 py-14'>
            <div className='text-center'>
                <p className='text-3xl pb-1 text-yellow-600 font-mono'>DINNER</p>
                <img src={commonicon} className='w-24 mx-auto text-white'/>
            </div>

            <div className='pt-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 font-custom2 '>

            {starters.map((item, index) => (
                <div key={index} className='md:text-2xl'>
                    <div>
                        <div className='flex gap-2 justify-between'>
                            <p>{item.name}</p>
                            <div className='flex-grow border-b-[2px] md:h-6 h-5 border-dotted border-gray-800'></div>
                            <p>{item.price}</p>
                        </div>
                        <p className='text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-2'>
            <div>
            <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="mySwiper">
                <div>
                <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='bg-orange-50 px-4 flex flex-col justify-center'>
                        <div>
                            <p className='text-yellow-400 text-lg pb-4'>Special Menu</p>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <img src={smi1}/>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='bg-orange-50 px-4 flex flex-col justify-center'>
                        <div>
                            <p className='text-yellow-400 text-lg pb-4'>Special Menu</p>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <img src={smi1}/>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div className='bg-orange-50 px-4 flex flex-col justify-center'>
                        <div>
                            <p className='text-yellow-400 text-lg pb-4'>Special Menu</p>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <img src={smi1}/>
                    </div>
                </div>
                </SwiperSlide>
                </div>
                </Swiper>
            </div>

            <div>
            <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]} className="mySwiper">
                <div>
                <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={smi2}/>
                    </div>
                    <div className='bg-orange-50 px-4 flex flex-col justify-center'>
                        <div>
                            <p className='text-yellow-400 text-lg pb-4'>Coffee Of The Day</p>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={smi2}/>
                    </div>
                    <div className='bg-orange-50 px-4 flex flex-col justify-center'>
                        <div>
                            <p className='text-yellow-400 text-lg pb-4'>Coffee Of The Day</p>
                            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                </div>
                </Swiper>
            </div>
        </div>

        <div className='text-center sm:px-12 px-4 pt-20 pb-40'>
            <p className='text-yellow-500 text-sm pb-3'>CONTACT US</p>
            <p className='font-custom2 sm:text-3xl text-2xl pb-3'>Book Your Reservation Today.</p>
            <p className='text-sm text-gray-400 md:px-30 sm:px-10 px-0 pb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio vel corrupti quia ea provident, similique incidunt quidem sapiente cum pariatur soluta error dolor et laboriosam quaerat? Tenetur, obcaecati exercitationem!</p>
            <button className='text-yellow-500 border-[1px] border-yellow-500 p-2 py-1'>Book Table</button>
        </div>
    </div>
    </>
  )
}

export default Menu
