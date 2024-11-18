import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUspage = ( props ) => {
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

      <div className='sm:px-12 px-4 sm:pt-20 pt-10 sm:pb-10 grid sm:grid-cols-[40%_60%] gap-5 sm:gap-0'>
        <div>
          <div className='pb-5'>
            <p className='text-sm pb-3' style={{color:'#C5A572'}}>CONTACT US</p>
            <p className='font-custom2 text-2xl pb-5'>Get In Touch</p>
            <div className='border-b-[1px] border-gray-300 md:w-60 lg:w-96 gap-5'>
              <div className='flex gap-5'>
                <p><FontAwesomeIcon icon={faLocationDot} className='text-black pr-0'/></p>
                <p className='text-sm text-gray-500 pb-5'>2839 Old Dear Lane New York, NY 10013 United States</p>
              </div>
              <div className='flex gap-5'>
                <p><FontAwesomeIcon icon={faPhoneVolume} className='text-black pr-0'/></p>
                <p className='text-sm text-gray-500 pb-5'>+ (0712) 819 79 555</p>
              </div>
              <div className='flex gap-5'>
                <p><FontAwesomeIcon icon={faEnvelope} className='text-black pr-0'/></p>
                <p className='text-sm text-gray-500 pb-5'>info@havnor.com</p>
              </div>
            </div>
          </div>
          <div>
              <p className='pb-3'>Opening Hours</p>
              <div className='flex justify-start gap-5 text-sm text-gray-500'>
                  <p>Mon - Fri</p>
                  <p>09:00 AM - 08:00 PM</p>
              </div>
              <div className='flex justify-start gap-5 text-sm text-gray-500'>
                  <p>Sat - Sun</p>
                  <p>09:00 AM - 05:00 PM</p>
              </div>
          </div>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44740.94788130832!2d72.463919565137!3d23.058550187640392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ca1402b2107%3A0xc6b7cfd374cb4bcb!2sThaltej%2C%20Ahmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1729676720359!5m2!1sen!2sin" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* form */}
      <div className='sm:px-12 px-4 py-10'>
        <div className='bg-orange-50 pt-10 pb-20'>
          <div className='text-center py-10'>
            <p className='font-custom2 text-2xl pb-3' style={{color: '#C5A572'}}>SEND A MESSAGE</p>
            <p className='text-sm sm:text-base text-gray-500 xl:px-80 lg:px-60 md:px-32 sm:px-16 px-2'>Do you have anything in your mind to tell us? please don't hesitate to get in touch to us via our contact form.</p>
          </div>

          <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-x-12 sm:gap-x-8 gap-5 lg:px-40 md:px-20 sm:px-10 px-4'>
            <div className='flex flex-col gap-5'>
              <div>
                <p className='text-gray-400'>Name *</p>
                <input type='text' className='w-full border-b-[1px] border-gray-400 focus:outline-none bg-orange-50'/>
              </div>
              <div>
                <p className='text-gray-400'>Phone *</p>
                <input type='number' className='w-full border-b-[1px] border-gray-400 focus:outline-none bg-orange-50'/>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <div>
                <p className='text-gray-400'>E-mail *</p>
                <input type='email' className='w-full border-b-[1px] border-gray-400 focus:outline-none bg-orange-50'/>
              </div>
              <div>
                <p className='text-gray-400'>Subject *</p>
                <input type='text' className='w-full border-b-[1px] border-gray-400 focus:outline-none bg-orange-50'/>
              </div>
            </div>
            <div className='sm:col-span-2 pt-1'>
                <p className='text-gray-400'>Notes</p>
                <input type='text' className='w-full border-b-[1px] border-gray-400 focus:outline-none bg-orange-50'/>
            </div>
          </div>

          <div className='text-center pt-10'>
            <button className='bg-black text-white px-3 py-2'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUspage
