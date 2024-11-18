import React, { useState } from 'react'
import b1 from '../images/blog/blogimg3.png'
import b2 from '../images/blog/blogimg10.png'
import b3 from '../images/blog/blogimg4.png'
import b4 from '../images/blog/blogimg5.png'
import b5 from '../images/blog/blogimg11.png'
import b6 from '../images/blog/blogimg12.png'
import b7 from '../images/blog/blogimg2.png'
import b8 from '../images/blog/blogimg6.png'
import b9 from '../images/blog/blogimg9.png'
import b10 from '../images/blog/blogimg7.png'
import b11 from '../images/blog/blogimg1.png'
import b12 from '../images/blog/blogimg8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Blogspage = ( props ) => {

    const catagories = ['All','Events','Achievement','Latest News']

    const items = [
        { id: 1, image: b1, catagory: ['Achievement', 'Latest News'], title: "Macarons vs. Macarons: What's the Difference There?", description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 2, image: b2, catagory: ['Latest News'], title: "Laboriosm volumpeu elidls omnis imperis repoudis", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 3, image: b3, catagory: ['Achievement', 'Latest News'], title: "Animi quis et ec cimups loedm asdubm pkugcnon", description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 4, image: b4, catagory: ['Achievement', 'Latest News'], title: "Eum debitis haram volutes ex volutes marshalo", description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 5, image: b5, catagory: ['Events', 'Latest News'], title: "Quam hic corrucip moleshius quisum fugit us.", description: 'Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 6, image: b6, catagory: ['Latest News'], title: "Neque sint de amara expladi in.", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, beatae nulla, cumque eligendi eum?'},
        { id: 7, image: b7, catagory: ['Latest News'], title: "Maicons laundianr molesiunt querenat aut ae", description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 8, image: b8, catagory: ['Achievement', 'Latest News'], title: "Magam dolors erorr fugit song qui abliwk", description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 9, image: b9, catagory: ['Latest News'], title: "Molesitate munuple aepleufn", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, eligendi eum?'},
        { id: 10, image: b10, catagory: ['Events'], title: "Aliqum sed gharm dsoifnv sfofin", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, nulla, cumque eligendi eum?'},
        { id: 11, image: b11, catagory: ['Events', 'Achievement'], title: "Sewrnfwgo mcxvxoin seycin ccmvoin zanciu lopok", description: 'Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 12, image: b12, catagory: ['Achievement'], title: "Non dolorom nobita quisonfm vloumasd qiua", description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
    ]

    const [activecatagory, setactivecatagory] = useState("All")

    const filtereditems =  activecatagory === "All" ? items : items.filter((item)=> item.catagory.includes(activecatagory))

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

        <div className='sm:px-12 px-4 md:pt-16 sm:pt-12 py-10 flex lg:gap-7 gap-5 justify-start flex-wrap'>
          {catagories.map((catagory, index)=>(
            <button key={index} className={`font-semibold pb-1 ${activecatagory === catagory ? 'border-b-[2px] border-black' : 'hover:border-b-[2px] hover:border-black'}`} onClick={()=> setactivecatagory(catagory)}>{catagory}</button>
          ))}
        </div>

        <div className='sm:px-12 px-4 sm:pb-20 pb-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-20 lg:gap-x-10 md:gap-y-10 gap-10'>
          {filtereditems.map((item, index) => (
            <div key={index} className="flex flex-col h-full">
              <div>
                <img src={item.image} className='w-full' />
              </div>
              <p className='text-sm text-gray-400 pt-6 pb-2'>21-04-2020 ~ Food</p>
              <div className='flex flex-col justify-between gap-2 h-full'>
                <p className='font-semibold text-lg'>{item.title}</p>
                <p className='text-gray-400 py-2' style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden'}}>{item.description}</p>
                <div className=''>
                  <Link to={`/Blog/BlogDetails/:${item.id}`} className='text-[#C5A572]'>Read More <FontAwesomeIcon icon={faArrowRightLong} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Blogspage
