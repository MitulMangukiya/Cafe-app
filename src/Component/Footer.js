import React from 'react'
import footerimg from '../images/cafelogo.svg'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const mediaicons = [
        {
            id: 1,
            icon: faFacebookF
        },
        {
            id: 2,
            icon: faInstagram
        },
        {
            id: 3,
            icon: faLinkedin
        },
        {
            id: 4,
            icon: faTwitter
        }
    ]

    const servicelist = [
        {
            id: 1,
            item: "Fine Dining & Concierge"
        },
        {
            id: 2,
            item: "Quick Counter Service"
        },
        {
            id: 3,
            item: "Banquet Table Service"
        },
        {
            id: 4,
            item: "Family Style Service"
        },
        {
            id: 5,
            item: "Quick Delivery Service"
        },
        {
            id: 6,
            item: "Buffet Table Service"
        },
        {
            id: 7,
            item: "Traditional Counter Service"
        }
    ]
  return (
    <>
    <footer className='2xl:container mx-auto bg-black py-10'>
        <div className='flex justify-center align-middle sm:pt-3 px-16 gap-10'>
              <div className="border-b-[1px] border-dashed border-yellow-600 sm:w-64 lg:w-[400px] 2xl:w-[500px] md:h-9 h-6"></div>
              <div><img src={footerimg} alt="cafe logo" className='mx-auto sm:w-full'/></div>
              <div className="border-b-[1px] border-dashed border-yellow-600 sm:w-64 lg:w-[400px] 2xl:w-[500px] md:h-9 h-6"></div>
        </div>

        <div className='flex gap-3 justify-center text-gray-300 py-10'>
            {mediaicons.map((media, index) => (
                <div key={index}>
                    <a href='#' className='p-2 px-3 rounded-full bg-gray-500'><FontAwesomeIcon icon={media.icon} /></a>
                </div>
            ))}
        </div>

        <div className='px-6 md:px-12 sm:gap-x-5 sm:gap-y-0 lg:gap-5 gap-y-5 text-gray-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='sm:border-dashed sm:border-r-[1px] sm:border-gray-400 sm:pr-7'>
                <p className='text-yellow-500 pb-4'>Contact Us</p>
                <div>
                    <p className='border-b-[1px] text-sm pb-4'><FontAwesomeIcon icon={faLocationDot} /> 2839 Old Dear Lane New York, NY 10013 United States</p>
                    <p className='border-b-[1px] text-sm py-4'><FontAwesomeIcon icon={faPhoneVolume} /> + (0712) 819 79 555</p>
                    <p className='text-sm py-4'><FontAwesomeIcon icon={faEnvelope} /> info@havnor.com</p>
                </div>
            </div>
            <div className='lg:border-dashed lg:border-r-[1px] border-gray-400'>
                <p className='text-yellow-500 pb-2'>Services</p>
                <div className='leading-7 text-sm'>
                    {servicelist.map((list, index) => (
                        <p key={index}><span className='text-yellow-500'>-</span> {list.item}</p>                  
                    ))}
                </div>
            </div>
            <div className='sm:border-dashed sm:border-r-[1px] sm:border-gray-400 sm:pr-5 sm:pt-5 lg:pt-0'>
                <div>
                    <p className='text-yellow-500 '>Opening Hours</p>
                    <div className='flex justify-between text-sm border-b-[1px] py-3'>
                        <p>Mon - Fri</p>
                        <p>09:00 AM - 08:00 PM</p>
                    </div>
                    <div className='flex justify-between text-sm border-b-[1px] py-3'>
                        <p>Mon - Fri</p>
                        <p>09:00 AM - 08:00 PM</p>
                    </div>
                </div>
                <div className='pt-4'>
                    <p className='text-yellow-500'>Coffee Bar Opening</p>
                    <div className='flex justify-between text-sm border-b-[1px] py-3'>
                        <p>Mon - Fri</p>
                        <p>09:00 AM - 08:00 PM</p>
                    </div>
                    <div className='flex justify-between text-sm border-b-[1px] py-3'>
                        <p>Mon - Fri</p>
                        <p>09:00 AM - 08:00 PM</p>
                    </div>
                </div>
            </div>
            <div className='sm:pt-5 lg:pt-0 pt-3'>
                <p className='text-yellow-500 pb-2'>Newsletter</p>
                <p>Stay always in touch! Subscribe to our newletter.</p>
                <input type='email' placeholder='name@example.com' className='w-full rounded-sm py-1.5 px-1 text-sm focus:outline-none bg-gray-700 text-white my-3'/>
                <button className='text-white bg-yellow-600 w-full rounded-sm py-1'>Subscribe Now</button>
            </div>
        </div>
        <div className='text-gray-400 text-sm text-center py-10'>
            <p>COPYRIGHT &copy; ALL RIGHTS RESERVED BY ONELINE CAFE</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
