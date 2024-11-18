import React from 'react'
import './Servicepage.css'
import weddingring from '../images/services/wedding-rings.svg'
import holidayparty from '../images/services/restauranticon.svg'
import birthdayparty from '../images/services/birthday-cakeicon.svg'
import socialenvent from '../images/services/bar.svg'
import corporateenvent from '../images/services/cheersicon.svg'
import privateparty from '../images/services/outline.svg'
// import servicebg from '../images/services/servicesbg.png'
import commonicon from '../images/services/commonicon.svg'
import e1 from '../images/services/ser1.png'
import e2 from '../images/services/ser2.png'
import e3 from '../images/services/ser3.png'
import e4 from '../images/services/ser4.png'
import e5 from '../images/services/ser5.png'
import e6 from '../images/services/ser6.png'
import sg1 from '../images/services/sg1.png'
import sg2 from '../images/services/sg2.png'
import sg3 from '../images/services/sg3.png'
import sg4 from '../images/services/sg4.png'

const Servicepage = ( props ) => {

  const moments = [
    {
        img: sg1
    },
    {
        img: sg2
    },
    {
        img: sg3
    },
    {
        img: sg4
    }
  ] 
  return (
    <>
    <div className="2xl:container mx-auto">

        <div className='relative'>
            <img src={props.bg} alt='service-bg' className='w-full h-80'/>
            <div  className='text-center absolute flex flex-col justify-center text-white top-0 w-full h-full' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <p className='font-custom2 text-4xl text-yellow-500 pb-2'>{props.title}</p>
                <p className='text-sm'>{props.description}</p>
            </div>
        </div>

        <div className='sm:px-12 px-4 sm:py-20 py-10'>

            <div className='flex flex-wrap md:flex-nowrap gap-5 justify-between'>
                <div className='md:w-96 w-auto'>
                    <p className='text-sm' style={{color: '#C5A572'}}>OUR SERVICES</p>
                    <p className='font-custom2 text-3xl pt-3'>We Hold Events</p>
                </div>     
                <div className='md:w-[800px] w-auto relative md:top-1 top-0'>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem temporibus nam? Est iste error quis aspernatur ipsam doloribus repellat amet necessitatibus, reprehenderit, distinctio iure.</p>
                </div>     
            </div>

            {/* events */}
            <div className='pt-10'>

                {/* event-1 */}
                <div className='sm:grid grid-cols-[60%_40%]'>
                    <div className='flex text-center justify-center flex-col p-10 bg-orange-50'>
                        <div>
                            <img src={weddingring} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Wedding Events</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={e1} className='sm:h-full'/>
                    </div>
                </div>

                {/* event-2 */}
                <div className='sm:grid pt-4 sm:pt-0 grid-cols-[40%_60%]'>
                    <div className=''>
                        <img src={e2} className='sm:h-full'/>
                    </div>
                    <div className='flex text-center justify-center flex-col p-10'>
                        <div>
                            <img src={holidayparty} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Holiday Parties</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                </div>

                {/* event-3 */}
                <div className='sm:grid grid-cols-[60%_40%]'>
                    <div className='flex text-center justify-center flex-col p-10 bg-orange-50'>
                        <div>
                            <img src={birthdayparty} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Birthday Parties</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={e3} className='sm:h-full'/>
                    </div>
                </div>

                {/* event-4 */}
                <div className='sm:grid pt-4 sm:pt-0 grid-cols-[40%_60%]'>
                    <div className=''>
                        <img src={e4} className='sm:h-full'/>
                    </div>
                    <div className='flex text-center justify-center flex-col p-10'>
                        <div>
                            <img src={socialenvent} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Social Events</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                </div>

                {/* event-5 */}
                <div className='sm:grid grid-cols-[60%_40%]'>
                    <div className='flex text-center justify-center flex-col p-10 bg-orange-50'>
                        <div>
                            <img src={corporateenvent} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Corporate Events</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={e5} className='sm:h-full'/>
                    </div>
                </div>

                {/* event-6 */}
                <div className='sm:grid pt-4 sm:pt-0 grid-cols-[40%_60%]'>
                    <div className=''>
                        <img src={e6} className='sm:h-full'/>
                    </div>
                    <div className='flex text-center justify-center flex-col p-10'>
                        <div>
                            <img src={privateparty} className='w-10 mx-auto pb-2'/>
                            <p className='font-custom2 text-2xl pb-2'>Private Party</p>
                            <img src={commonicon} className='w-20 mx-auto pb-4'/>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, earum quia impedit quos non aliquid quo repudiandae mollitia ullam, fugit excepturi neque tempora obcaecati explicabo molestiae nemo. Amet, consectetur quaerat ea repellendus soluta rerum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='servicebg'>
            <div className='py-16 text-white flex flex-col gap-6 justify-center text-center' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <p className='lg:px-40 xl:px-60 px-5 font-custom2 lg:text-4xl md:text-3xl text-xl lg:leading-[70px] md:leading-[50px] leading-[35px]'>With A Full Range Of Event Management Service And Super Menu, Our Client Achieve <span style={{color:'#C5A572'}}>Successfull</span> And Prosperous Events!</p>
                <button className='border-[1px] p-1 w-28 border-white mx-auto'>Read More</button>
            </div>
        </div>

        <div className='py-20'>
            <div className='text-center'>
                <p className='text-sm pb-3' style={{color:'#C5A572'}}>Take A Tour</p>
                <p className='font-custom2 text-2xl'>Our Happy Moments</p>
            </div>

            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 pt-10 sm:px-9 px-4'>
                {moments.map((tour, index) => (
                   <div key={index}>
                        <img src={tour.img}/>
                   </div>     
                ))}
            </div>
        </div>

        <div className='text-center sm:px-12 px-4 pb-20'>
            <p className='text-yellow-500 text-sm pb-3'>CONTACT US</p>
            <p className='font-custom2 sm:text-3xl text-2xl pb-3'>Book Your Reservation Today</p>
            <p className='text-sm text-gray-400 md:px-30 sm:px-10 px-0 pb-5 leading-[25px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero optio vel corrupti quia ea provident, similique incidunt quidem sapiente cum pariatur soluta error dolor et laboriosam quaerat? Tenetur, obcaecati exercitationem!</p>
            <button className='text-yellow-500 border-[1px] border-yellow-500 p-2 py-1'>Book Table</button>
        </div>
    </div>
    </>
  )
}

export default Servicepage
