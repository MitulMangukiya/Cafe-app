import React, { useState } from 'react'
import f1 from '../images/gallery/g10.png'
import f2 from '../images/gallery/g3.png'
import f3 from '../images/gallery/g6.png'
import f4 from '../images/gallery/g11.png'
import f5 from '../images/gallery/g9.png'
import f6 from '../images/gallery/g13.png'
import f7 from '../images/gallery/g5.png'
import f8 from '../images/gallery/g8.png'
import f9 from '../images/gallery/g2.png'
import f10 from '../images/gallery/g7.png'
import f11 from '../images/gallery/g4.png'
import f12 from '../images/gallery/g1.png'

const Gallerypage = ( props ) => {

  const catagories = ['All','Food','Cafe Interior','Italian Food','Non-Veg Food','Vegetarian','Events / Celebration']

  const items = [
    { id: 1, catagory : ['Non-Veg Food','Food'], image: f1, name: 'Grilled Roast Meat'},
    { id: 2, catagory : ['Non-Veg Food', 'Food'], image: f2, name: 'Ginger Chicken Kabob'},
    { id: 3, catagory : ['Non-Veg Food', 'Food'], image: f3, name: 'Tandoori Fish'},
    { id: 4, catagory : 'Events / Celebration', image: f4, name: 'Night Life'},
    { id: 5, catagory : 'Events / Celebration', image: f5, name: 'Events Images'},
    { id: 6, catagory : 'Cafe Interior', image: f6, name: 'Indoors'},
    { id: 7, catagory : ['Food', 'Italian Food', 'Vegetarian'], image: f7, name: 'Grilled Potato Pizza'},
    { id: 8, catagory : ['Food', 'Vegetarian'], image: f8, name: 'Mexican Cheese Burger'},
    { id: 9, catagory : ['Food', 'Vegetarian', 'Non-Veg Food'], image: f9, name: 'Raspberry Cupcake Dessert'},
    { id: 10, catagory : ['Food', 'Vegetarian'], image: f10, name: 'Little India Cosmo'},
    { id: 11, catagory : ['Food', 'Non-Veg Food'], image: f11, name: 'American Grilled Chicken'},
    { id: 12, catagory : ['Food', 'Vegetarian'], image: f12, name: 'Mexican Cheese Roll'},
  ]

  const[activecatagory, setactivecatagory] = useState("All")

  const filtereditems = activecatagory === "All" ? items : items.filter((item)=> item.catagory.includes(activecatagory))

  return (
    <>
    <div className='2xl:container mx-auto'>

        <div className='relative'>
            <img src={props.bg} alt='service-bg' className='w-full h-80'/>
            <div  className='text-center absolute flex flex-col justify-center text-white top-0 w-full h-full' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <p className='font-custom2 text-4xl text-yellow-500 pb-2'>{props.title}</p>
                <p className='text-sm'>{props.description}</p>
            </div>
        </div>

        {/* links */}
        <div className='sm:px-12 px-4 md:pt-16 sm:pt-12 py-10 flex lg:gap-7 gap-5 md:gap-0 md:justify-between justify-around lg:justify-start flex-wrap'>
          {catagories.map((catagory, index)=>(
            <button key={index} className={`font-semibold pb-1 ${activecatagory === catagory ? 'border-b-[2px] border-black' : 'hover:border-b-[2px] hover:border-black'}`} onClick={()=> setactivecatagory(catagory)}>{catagory}</button>
          ))}
        </div>

        <div className='pb-20'>
          <div className='sm:px-12 px-4 pb-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-4'>
            {filtereditems.map((item, index)=>(
              <div key={index}>
                <div>
                  <img src={item.image}/>
                </div>
                <div className='bg-[#F4EEE4] py-5'>
                  <p className='font-custom2 lg:text-xl text-lg pl-5'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center'>
            <button className='p-1 px-3.5 sm:text-xl text-[#C5A572] border-[#C5A572] border-[1px]'>View More</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Gallerypage
