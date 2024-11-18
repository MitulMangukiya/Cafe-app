import React from 'react'

const Form = () => {
  return (
    <>
    <div className='2xl:container mx-auto bg-orange-50 py-14 sm:px-12 px-6'>
        <div className='text-center'>
            <p className='text-orange-400 text-sm'>RESERVATION</p>
            <p className='font-custom2 text-3xl pt-3'>Online Booking</p>
        </div>

        <form className='md:px-20 sm:px-12'>
            <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-5 pt-5'>
                <div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>Name*</p>
                        <input type='text' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>Phone*</p>
                        <input type='number' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>Time*</p>
                        <input type='time' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                </div>
                <div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>E-mail*</p>
                        <input type='email' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>Date*</p>
                        <input type='date' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                    <div className='pb-3'>
                        <p className='pb-1 text-gray-400'>Seats*</p>
                        <input type='number' className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'/>
                    </div>
                </div>
            </div>

            <div className='pt-0'>
                <p className='pb-2 text-gray-400'>Example textarea</p>
                <textarea rows={1} className='w-full focus:outline-none bg-orange-50 border-black border-b-[1px]'></textarea>
            </div>

            <div className='text-center pt-8'>
                <button className='text-white bg-black p-1'>Book A Table</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form
