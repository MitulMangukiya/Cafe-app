import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import navimg from '../images/cafelogo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navlinks = [
    {
      to : '/',
      text : 'Home',
    },
    {
      to : '/Menu',
      text : 'Menu'
    },
    {
      to : '/AboutUs',
      text : 'About Us'
    },
    {
      to : '/Gallery',
      text : 'Gallery'
    },
    {
      to : '/Blogs',
      text : 'Blogs'
    },
    {
      to : '/Service',
      text : 'Service'
    },
    {
      to : '/ContactUs',
      text : 'Contact Us'
    }
  ]

  const [isOpen, setIsOpen] = useState(false);

  const togglemenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState('/');

  return (
    <>
    <section className='2xl:container mx-auto flex flex-wrap md:justify-between sm:px-12 px-6 py-2 gap-4 bg-black text-white'>
      <div className='flex gap-5 w-full md:w-auto justify-center'>
        <div>
          <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
        <div>
          <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div>
          <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div>
          <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>

      <div className='flex gap-5 justify-center w-full md:w-auto'>
        <div className='text-[10px] sm:text-[15px]'>
          <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />
          <span className='sm:ps-2 ps-1'>Call us: (+1)123 4567 890</span>
        </div>
        <div className='text-[10px] sm:text-[15px]'>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
          <span className='sm:ps-2 ps-1'>Mail us: info@havnor.com</span>
        </div>
      </div>
    </section>

    <nav className='2xl:container mx-auto bg-gray-900 text-white flex flex-wrap justify-between sm:px-12 px-4 pt-2 gap-4'>
      <div>
        <img src={navimg} alt='Cafe Logo' className='mb-2'/>
      </div>

      <div>
        {/* small screen navbar */}
        <button onClick={togglemenu} className='lg:hidden'><FontAwesomeIcon icon={faBars} className='p-2 mt-4 border rounded'/></button>
        <nav className={`${isOpen ? 'visible' : 'hidden'} text-lg relative bottom-1`}>
          <ul className="space-y-2 absolute z-20 right-[1px] bg-gray-900 w-40 px-7 py-3 leading-9 border-[1px]">
            {navlinks.map((links, index)=>(
              <Link key={index} to={links.to}><li className='hover:text-yellow-400' onClick={() => setActiveLink(links)}>{links.text}</li></Link>
            ))}
          </ul>
        </nav>

        {/* large screen navbar */}
        <ul className='lg:visible hidden lg:flex md:gap-7 relative top-6'>
          {navlinks.map((links, index)=>(
            <Link key={index} to={links.to}><li className={`pb-6 relative cursor-pointer ${activeLink === links.to ? 'border-b-[2px] border-yellow-600' : 'hover:border-b-[2px] hover:border-yellow-600'}`} onClick={() => setActiveLink(links.to)}>{links.text}</li></Link>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
