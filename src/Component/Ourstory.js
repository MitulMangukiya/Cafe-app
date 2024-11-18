import React from 'react'
import ourstorybg1 from '../images/ourstory1.png'
import ourstorybg2 from '../images/ourstory2.png'
import './Ourstory.css'

const Ourstory = () => {
  return (
    <>
    <div className='our-story-main'>
    <div className='our-story 2xl:container mx-auto grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-8 md:px-12 px-6 md:py-20 py-14'>
        <div className='my-auto'>
            <p className='text-[13px] text-yellow-600'>OUR STORY</p>
            <p className='sm:text-[35px] text-[33px] my-2 font-custom2'>A Brief History Of How We Started</p>
            <p className='text-gray-400'>Consectetur, adipisicing elit. Corporis facere saepe quo eveniet placeat nulla nobis officia et reiciendis beatae id incidunt mollitia quibusdam, in ipsa sequi nam dolores necessitatibus?</p>
        </div>
        <div className='my-auto grid sm:grid-cols-2 grid-cols-1 gap-5'>
            <img src={ourstorybg1} alt='Our Story Glimps' className='sm:my-auto h-64 sm:h-auto w-60 mx-auto sm:w-auto'/>
            <img src={ourstorybg2} alt='Our Story Glimps' className='w-60 h-64 sm:h-auto mx-auto sm:w-auto'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Ourstory
