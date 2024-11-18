import React from 'react'
import outline from '../images/outline.svg'
import happyface from '../images/happiness.svg'
import cheers from '../images/cheers.svg'
import aboutvideo from '../images/about_us_video.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import sp1 from '../images/sp1.png'
import sp2 from '../images/sp2.png'
import sp3 from '../images/sp3.png'
import Team from './Team'
import Gallery from './Gallery'

const AboutUs = ( props ) => {

  const stories = [
    {
      id: 1,
      title: 'Who We Are',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo consequatur, amet voluptate, id ex ducimus molestiae voluptates voluptatem aperiam nostrum porro dolores asperiores magni ipsum incidunt tempore minus! Officia saepe quae earum soluta officiis.'
    },
    {
      id: 2,
      title: 'Why Choose Us',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo consequatur, amet voluptate, id ex ducimus molestiae voluptates voluptatem aperiam nostrum porro dolores asperiores magni ipsum incidunt tempore minus! Officia saepe quae earum soluta officiis.'
    }
  ]

  const specialities = [
    {
      id: 1,
      img: sp1,
      title: 'Fine Dining',
      description: 'Amet consectetur adipisicing elit. Perspiciatis dolorem, blanditiis sint repudiandae veniam nemo illum cupiditate suscipit, ut fuga vitae magni quam optio autem?'
    },
    {
      id: 2,
      img: sp2,
      title: 'Spicy Cocktails',
      description: 'Amet consectetur adipisicing elit. Perspiciatis dolorem, blanditiis sint repudiandae veniam nemo illum cupiditate suscipit, ut fuga vitae magni quam optio autem?'
    },
    {
      id: 3,
      img: sp3,
      title: 'Best Veggie',
      description: 'Amet consectetur adipisicing elit. Perspiciatis dolorem, blanditiis sint repudiandae veniam nemo illum cupiditate suscipit, ut fuga vitae magni quam optio autem?'
    }
  ]

  const Standards = [
    {
      id: 1,
      title: 'Choose Music Carefully Sapiente.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatibus reprehenderit nemo esse unde nihil itaque obcaecati ipsum in maiores!',
    },
    {
      id: 2,
      title: 'Never Serve Food That Has Expired.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatibus reprehenderit nemo esse unde nihil itaque obcaecati ipsum in maiores!',
    },
    {
      id: 3,
      title: 'Keep The Restaurant Spotless.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatibus reprehenderit nemo esse unde nihil itaque obcaecati ipsum in maiores!',
    },
  ]

  return (
    <>
    <div className="2xl:container mx-auto">

      {/* about first section */}
      <div className='relative'>
            <img src={props.bg} alt='about-bg' className='w-full h-80'/>
            <div  className='text-center absolute flex flex-col justify-center text-white top-0 w-full h-full' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <p className='font-custom2 text-4xl text-yellow-500 pb-2'>{props.title}</p>
                <p className='text-sm'>{props.description}</p>
            </div>
        </div>

      {/* about our story */}
      <div className='sm:px-12 px-4 py-14'>
        <div className='text-center pb-6'>
          <p className='text-sm text-yellow-500 pb-2'>OUR STORY</p>
          <p className='font-custom2 text-3xl'>Since 2007</p>
        </div>

        <div className='flex sm:gap-8 gap-5 sm:flex-row flex-col'>
          {stories.map((story, index)=>(
            <div  key={index} className='border-[1px] border-yellow-500 p-10 text-center'>
              <p className='font-custom2 text-3xl pb-2'>{story.title}</p>
              <p className='text-gray-400'>{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* dishes */}
      <div className='sm:px-12 px-4 grid md:grid-cols-4 grid-cols-2 bg-orange-50 md:gap-0 gap-y-5 py-10'>
        <div className='border-r-[1.5px] border-orange-200 pr-4'>
          <p className='font-custom2 sm:text-2xl text-xl'>Every Day We Get Better For You</p>
        </div>
        <div className='text-center md:border-r-[1.5px] md:border-orange-200 md:pr-2'>
          <img src={outline} alt='coffee' className='w-10 mx-auto'/>
          <p className='font-custom2 text-2xl py-3'>150</p>
          <div className='flex justify-center'><hr className='w-10 py-[0.5px] bg-gray-600'/></div>
          <p className='text-sm text-gray-400 pt-1'>Dishes Menu</p>
        </div>
        <div className='text-center border-r-[1.5px] border-orange-200 pr-2'>
          <img src={happyface} alt='Customer' className='w-10 mx-auto'/>
          <p className='font-custom2 text-2xl py-3'>2000</p>
          <div className='flex justify-center'><hr className='w-10 py-[0.5px] bg-gray-600'/></div>
          <p className='text-sm text-gray-400 pt-1'>Happy Customers</p>
        </div>
        <div className='text-center'>
          <img src={cheers} alt='cheers' className='w-10 h-10 mx-auto'/>
          <p className='font-custom2 text-2xl py-3'>450</p>
          <div className='flex justify-center'><hr className='w-10 py-[0.5px] bg-gray-600'/></div>
          <p className='text-sm text-gray-400 pt-1'>Featured Events</p>
        </div>
      </div>

      {/* about video */}
      <div className='sm:px-12 px-4 sm:py-20 py-10'>
        <div className='relative'>
          <img src={aboutvideo} alt='Video'/>
          <div className='absolute top-0 w-full h-full flex flex-col justify-center'>
            <div className='mx-auto'><FontAwesomeIcon icon={faPlay} className='md:p-4 p-3 md:px-[18px] px-[15px] mx-auto bg-white rounded-full md:text-xl'/></div>
          </div>
        </div>
      </div>

      {/* specialities section */}
      <div className='sm:px-12 px-4'>
        <div className='text-center pb-6'>
          <p className='text-sm text-yellow-500 pb-2'>OUR SPECIALITIES</p>
          <p className='font-custom2 text-3xl'>Praesent Condimentum Rutrum Nibh.</p>
        </div>

        <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 sm:pb-24 pb-10'>
          {specialities.map((speciality, index)=>(
            <div key={index} className='text-center'>
              <img src={speciality.img} alt={`speciality-${speciality.id}`} className='rounded-sm mx-auto'/>
              <p className='text-xl py-3'>{speciality.title}</p>
              <p className='text-gray-400 text-sm lg:px-3'>{speciality.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Section */}
      <div className='sm:px-12 px-4 py-14 bg-orange-50'>
        <div className='text-center pb-6'>
          <p className='text-sm text-yellow-500 pb-2'>OUR STANDARDS</p>
          <p className='font-custom2 text-3xl'>There Are Many Variations Of Passages</p>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 pt-4 gap-5'>
          {Standards.map((standard, index)=>(
            <div key={index} className='pb-5 sm:pb-0 px-2 text-center'>
              <p className='font-custom2 text-white font-bold text-5xl pb-5'>0{standard.id}</p>
              <p className='font-custom2 text-xl'>{standard.title}</p>
              <p className='text-sm text-gray-400'>{standard.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Team/>
      <Gallery/>
    </div>
    </>
  )
}

export default AboutUs
