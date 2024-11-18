import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import teamm1 from '../images/team1.png'
import teamm2 from '../images/team2.png'
import teamm3 from '../images/team3.png'
import './Team.css'

const Team = () => {

    const teamimg = [
        {
            id: 1,
            img: teamm1,
            name: "Mr. Gunner Upton"
        },
        {
            id: 2,
            img: teamm2,
            name: "Mr. Gunner Upton"
        },
        {
            id: 3,
            img: teamm3,
            name: "Mr. Gunner Upton"
        }
    ]

  return (
    <>
    <div className='2xl:container mx-auto sm:px-12 px-4 sm:py-12 pt-10'>
        <div>
            <div>
                <p className='text-yellow-400 text-sm'>TEAM MEMBER</p>
            </div>
            <div className='block sm:grid sm:grid-cols-2 gap-5 pt-3'>
                <div>
                    <p className='text-4xl font-custom2'>Meet Our Team</p>
                </div>
                <div className='pt-3 sm:pt-0'>
                    <p className='text-gray-400 text-[13px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod esse quo non ratione odio quos id, distinctio minus! Aliquid sit facere eaque laudantium nesciunt voluptate numquam veniam animi earum explicabo.</p>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 pb-14 sm:pb-0'>
            
            {teamimg.map((team)=>(
                <div key={team.id} className='relative team-div'>
                    <img src={team.img} alt='member-1' className='image mx-auto sm:mx-0 block w-full h-auto'/>
                    <div className='content w-full h-0 flex flex-col text-center text-white justify-center leading-8'>
                        <p className='font-semibold'>Mr. Gunner Upton</p>
                        <p className='text-sm'>Decoration Chef</p>
                        <div className="flex justify-center space-x-3">
                            <a href="#" className="text-white hover:text-yellow-400">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Team
