import React from 'react'
import G1 from '../images/G1.png'
import G2 from '../images/G2.png'
import G3 from '../images/G3.png'
import G4 from '../images/g4.png'

const Gallery = () => {

   const galleryimg = [
    {
        id: 1,
        img: G1
    },
    {
        id: 2,
        img: G2
    },
    {
        id: 3,
        img: G3
    },
    {
        id: 4,
        img: G4
    },
   ]
  return (
    <>
    <div className="2xl:container mx-auto sm:p-12 p-6 pb-12">
        <div className='text-center pb-10'>
            <p className='text-yellow-500 text-sm'>TAKE A TOUR</p>
            <p className='text-3xl pt-3 mx-auto font-custom2'>Our Restaurant Gallery</p>
        </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
            {galleryimg.map((img, index) => (
                <div key={index} className='overflow-hidden'>
                    <img src={img.img} alt={`gallery-photo-${index + 1}`} className='mx-auto hover:scale-110 transition-all duration-300'/>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Gallery
