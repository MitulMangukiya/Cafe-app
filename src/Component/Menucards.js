import React from 'react'
import './Menucards.css'

const Menucards = () => {

    const menuData = [
        {
          title: 'DRINKS',
          items: ['Beer', 'Coffee', 'Ice Tea', 'Juice', 'Milk Tea', 'Smoothie', 'Soft Drinks'],
          cardClass: 'card1',
        },
        {
          title: 'DINNER',
          items: ['Appetizers', 'Bruschetta', 'Chicken', 'Rice & Flesh', 'Seafood', 'Sides', 'Veal & Beef'],
          cardClass: 'card2',
        },
        {
          title: 'LUNCH',
          items: ['Appetizers', 'Cakes', 'Fire It Up', 'Pastas', 'Salads', 'Sandwiches', 'Soups'],
          cardClass: 'card3',
        },
      ];

  return (
    <>
    <div className='2xl:container mx-auto sm:px-12 px-4 py-10'>
        <div>
            <div>
                <p className='text-yellow-400 text-sm'>SPECIAL TODAY</p>
            </div>
            <div className='block sm:grid sm:grid-cols-2 gap-5 pt-3'>
                <div>
                    <p className='text-4xl font-custom2'>Feel The Authentic & Original Taste From Us</p>
                </div>
                <div className='pt-3 sm:pt-0'>
                    <p className='text-gray-400 text-[13px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod esse quo non ratione odio quos id, distinctio minus! Aliquid sit facere eaque laudantium nesciunt voluptate numquam veniam animi earum explicabo.</p>
                </div>
            </div>
        </div>

        {/* MENU CARDS */}
        <div className='grid sm:grid-cols-3 grid-cols-1 pt-10 gap-5'>
        {menuData.map((menu, index) => (
          <div key={index} className={`sm:w-full w-72 mx-auto text-center ${menu.cardClass} text-white py-10`}>
            <div>
              <p className='font-custom2 text-xl'>{menu.title}</p>
              <div className='py-2'>
                <hr className='bg-yellow-500 h-[2px] w-20 mx-auto' />
                <hr className='bg-yellow-500 h-[2px] w-14 mx-auto mt-0.5' />
              </div>
              <p>Menu</p>
              <ul className='text-sm leading-7'>
                {menu.items.map((item, idx) => (
                  <li key={idx}><a href='#'>{item}</a></li>
                ))}
                <li>...</li>
                <li className='text-yellow-500'>
                  <a href='#'>Explore More</a>
                </li>
              </ul>
            </div>
          </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Menucards
