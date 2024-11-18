import React from 'react'
import blog1 from '../images/G1.png'
import blog2 from '../images/G2.png'
import blog3 from '../images/blog2.png'
import quote from '../images/left-quote.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Blogs = () => {
  return (
    <>
    <div className="2xl:container mx-auto sm:px-12 px-6">
        <div className='text-center py-10 pt-16'>
            <p className='text-yellow-500 text-sm'>LATEST BLOGS</p>
            <p className='text-3xl pt-3 mx-auto font-custom2'>Praesent Condimentum Ruturn Nibh, Nec Ullamcorper Odio Laoreet Blandit.</p>
        </div>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-4'>

            {/* grid-1 */}
            <div>
                <div>
                    <img src={blog1} alt='blog1' className='mx-auto'/>
                    <p className='text-gray-400 text-sm pt-3'>21-04-2020 ~ Food</p>
                </div>
                <div className='py-4'>
                   <p>Macarons vs. Macarons: What's the Difference There?</p> 
                   <p className='text-sm py-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, tempora. Officiis officia tempora, porro unde assumenda beatae voluptas vitae dicta, numquam illo excepturi nostrum placeat.</p>
                   <a href='#' className='block text-yellow-400'>Read More <FontAwesomeIcon icon={faArrowRight} className='text-yellow-500'/></a>
                </div>
                <div className='bg-orange-50 p-10 text-center'>
                    <img src={quote} className='w-10 mx-auto' alt='quote'/>
                    <p className='py-2'>Eum officia culpa expedita mollitia corporis.</p>
                    <p className='text-[12px] text-gray-400'>Marshall Artis, Head Chef</p>
                </div>
            </div>

            {/* grid2 */}
            <div className='order-2 md:order-none'>
                <div className='bg-orange-50 lg:p-10 sm:p-8 p-10 mb-4 mx-3 text-center'>
                    <img src={quote} className='w-10 mx-auto' alt='quote'/>
                    <p className='py-2'>Eum officia culpa expedita mollitia corporis.</p>
                    <p className='text-[12px] text-gray-400'>Marshall Artis, Head Chef</p>
                </div>
                <div className='pt-6 sm:pt-0'>
                    <img src={blog2} alt='blog2' className='mx-auto'/>
                    <p className='text-gray-400 text-sm pt-3'>21-04-2020 ~ Food</p>
                </div>
                <div className='py-4'>
                   <p>Macarons vs. Macarons: What's the Difference There?</p> 
                   <p className='text-sm py-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, tempora. Officiis officia tempora, porro unde assumenda beatae voluptas vitae dicta, numquam illo excepturi nostrum placeat.</p>
                   <a href='#' className='block text-yellow-400'>Read More <FontAwesomeIcon icon={faArrowRight} className='text-yellow-500'/></a>
                </div>
            </div>

            {/* grid3 */}
            <div>
                <div>
                    <img src={blog3} alt='blog3' className='mx-auto w-[360px]'/>
                    <p className='text-gray-400 text-sm pt-3'>21-04-2020 ~ Food</p>
                </div>
                <div className='py-4'>
                   <p>Macarons vs. Macarons: What's the Difference There?</p> 
                   <p className='text-sm py-2 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, tempora. Officiis officia tempora, porro unde assumenda beatae voluptas vitae dicta, numquam illo excepturi nostrum placeat.</p>
                   <a href='#' className='block text-yellow-400'>Read More <FontAwesomeIcon icon={faArrowRight} className='text-yellow-500'/></a>
                </div>
                <div className='bg-orange-50 p-10 text-center'>
                    <img src={quote} className='w-10 mx-auto' alt='quote'/>
                    <p className='py-2'>Eum officia culpa expedita mollitia corporis.</p>
                    <p className='text-[12px] text-gray-400'>Marshall Artis, Head Chef</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blogs
