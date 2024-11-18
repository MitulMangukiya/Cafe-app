import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import b1 from '../images/blog/blogimg3.png'
import b2 from '../images/blog/blogimg10.png'
import b3 from '../images/blog/blogimg4.png'
import b4 from '../images/blog/blogimg5.png'
import b5 from '../images/blog/blogimg11.png'
import b6 from '../images/blog/blogimg12.png'
import b7 from '../images/blog/blogimg2.png'
import b8 from '../images/blog/blogimg6.png'
import b9 from '../images/blog/blogimg9.png'
import b10 from '../images/blog/blogimg7.png'
import b11 from '../images/blog/blogimg1.png'
import b12 from '../images/blog/blogimg8.png'
// import blogmainimg from '../images/blog_details/blogdetailsmain.png'
import bdc1 from '../images/blog_details/bdc1.png'
import bdc2 from '../images/blog_details/bdc2.png'
import blogpreviewimg from '../images/blog_details/blogpreviewimg.png'
import rp1 from '../images/blog_details/rp1.png'
import rp2 from '../images/blog_details/rp2.png'
import bd1 from '../images/blog_details/bd1.png'
import bd2 from '../images/blog_details/bd2.png'
import bd3 from '../images/blog_details/bd3.png'
import bd4 from '../images/blog_details/bd4.png'

const BlogDetailspage = ( props ) => {

    const { id } = useParams()
    const strid = id.replace(':', '')
    const numid = Number(strid)

    const items = [
        { id: 1, image: b1, catagory: ['Achievement', 'Latest News'], title: "Macarons vs. Macarons: What's the Difference There?", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 2, image: b2, catagory: ['Latest News'], title: "Laboriosm volumpeu elidls omnis imperis repoudis", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 3, image: b3, catagory: ['Achievement', 'Latest News'], title: "Animi quis et ec cimups loedm asdubm pkugcnon", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 4, image: b4, catagory: ['Achievement', 'Latest News'], title: "Eum debitis haram volutes ex volutes marshalo", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 5, image: b5, catagory: ['Events', 'Latest News'], title: "Quam hic corrucip moleshius quisum fugit us.", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 6, image: b6, catagory: ['Latest News'], title: "Neque sint de amara expladi in.", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 7, image: b7, catagory: ['Latest News'], title: "Maicons laundianr molesiunt querenat aut ae", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 8, image: b8, catagory: ['Achievement', 'Latest News'], title: "Magam dolors erorr fugit song qui abliwk", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 9, image: b9, catagory: ['Latest News'], title: "Molesitate munuple aepleufn", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 10, image: b10, catagory: ['Events'], title: "Aliqum sed gharm dsoifnv sfofin", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 11, image: b11, catagory: ['Events', 'Achievement'], title: "Sewrnfwgo mcxvxoin seycin ccmvoin zanciu lopok", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
        { id: 12, image: b12, catagory: ['Achievement'], title: "Non dolorom nobita quisonfm vloumasd qiua", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque beatae nulla, cumque eligendi eum?'},
    ]

    const filtereditem = items.filter((item) => item.id === numid)

    const [activecategory, setactivecategory] = useState(null)

    const foodcategory = [
        {
            id: 1,
            type: 'American Food',
            description : 'jfwibowfb ibngbgiugbgged  asucvacd vfpbmgrbpoghiuv asvsugwqed uewifejkdbfhvu abcoiufbefiueg lorem aun frfruiv.' 
        },
        {
            id: 2,
            type: 'Asian Food',
            description : 'jfwibowfb ibngbgiugbgged  asucvacd vfpbmgrbpoghiuv asvsugwqed uewifejkdbfhvu abcoiufbefiueg lorem aun frfruiv.' 
        },
        {
            id: 3,
            type: 'Mexican Food',
            description : 'jfwibowfb ibngbgiugbgged  asucvacd vfpbmgrbpoghiuv asvsugwqed uewifejkdbfhvu abcoiufbefiueg lorem aun frfruiv.' 
        },
        {
            id: 4,
            type: 'Birthday Events',
            description : 'jfwibowfb ibngbgiugbgged  asucvacd vfpbmgrbpoghiuv asvsugwqed uewifejkdbfhvu abcoiufbefiueg lorem aun frfruiv.' 
        },
        {
            id: 5,
            type: 'Wedding Events',
            description : 'jfwibowfb ibngbgiugbgged  asucvacd vfpbmgrbpoghiuv asvsugwqed uewifejkdbfhvu abcoiufbefiueg lorem aun frfruiv.' 
        }
    ]
    
    function tooglecategory(category){
        if(activecategory === category){
            setactivecategory(null)
        }
        else{
            setactivecategory(category)
        }
    }

    const slides = [
        {
            id: 1,
            img: blogpreviewimg,
            name: "Emilie D's Amore",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt voluptates facere asperiores iste harum!'
        },
        {
            id: 2,
            img: blogpreviewimg,
            name: "Emilie D's Amore",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt voluptates facere asperiores iste harum!'
        },
        {
            id: 3,
            img: blogpreviewimg,
            name: "Emilie D's Amore",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt voluptates facere asperiores iste harum!'
        }
    ]

    const posts = [
        {
            id: 1,
            img: bd1,
            title: 'Healthy Cooking Is A Must For',
            time: '17th Jan 2020',
        },
        {
            id: 2,
            img: bd2,
            title: 'Gourment Cooking For Pleasure',
            time: '15th Jan 2020',
        },
        {
            id: 3,
            img: bd3,
            title: 'How To Cook With Fresh Herbs',
            time: '08th Jan 2020',
        },
        {
            id: 4,
            img: bd4,
            title: 'Cooking With The Power Of The',
            time: '01th Jan 2020',
        },
    ]

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

        <div className='sm:px-12 px-4 sm:py-16 py-4 grid sm:grid-cols-[65%_32%] grid-cols-1 sm:gap-10 gap-10'>

            {/* grid-col-1 */}
            <div>

                {filtereditem.map((blog, index)=>(
                    <div key={index}>
                        <div>
                            <img src={blog.image} className='sm:w-full w-auto'/>
                        </div>

                        <p className='text-[#C5A572] text-sm sm:text-base pt-10 pb-3'>21-04-2020 ~ Food</p>
                        <p className='text-2xl pb-5'>{blog.title}</p>
                        <p className='text-sm text-gray-400 leading-7'>{blog.description + "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui. adipisicing elit. Soluta deserunt voluptas nobis molestias ut temporibus quas quis eum, laudantium incidunt aperiam distinctio, iure, voluptatibus odit placeat minus libero aut facilis odio veritatis nostrum iusto. Rem. laudantium incidunt aperiam distinctio, iure, voluptatibus odit placeat minus libero aut facilis odio veritatis nostrum iusto. Rem."}</p>
                        <p className='text-2xl pt-6 pb-4'>Nam Libro tempo, cum sluna bit pepe.</p>
                        <p className='text-sm text-gray-400 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia deserunt unde maxime voluptas facere exercitationem minus ea enim eveniet vel atque repellat totam ab fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui. fugiat aperiam consequuntur iste soluta, pariatur officiis blanditiis similique. Dolorum, qui.</p>
                    </div>
                ))}

                <div className='grid grid-cols-2 md:gap-10 sm:gap-5 gap-3 py-8'>
                    <div>
                        <img src={bdc1}/>
                    </div>
                    <div>
                        <img src={bdc2}/>
                    </div>
                </div>

                <p className='text-sm sm:pb-10 pb-4 text-gray-400 leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, ipsa.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid soluta hic at. Saepe aspernatur in adipisci quibusdam et, cum iste tempore at deleniti aut commodi, eum nostrum eligendi sed unde numquam quisquam, dicta praesentium reprehenderit voluptate pariatur excepturi ipsam. Reprehenderit nostrum eos veniam esse fuga necessitatibus, omnis eligendi repellendus!</p>

                <Swiper pagination={true} spaceBetween={20} modules={[Pagination]} className="mySwiper">
                    <div className='flex gap-5'>

                        {slides.map((slide, index)=>(
                            <SwiperSlide key={index} className='border-[1px] border-[#C5A572] lg:p-8 p-4 pb-7'>
                            <div className='flex gap-5'>
                                <div>
                                    <img src={slide.img}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-custom2 text-2xl'>{slide.name}</p>
                                    <div className='flex flex-col h-full gap-3 justify-between'>
                                        <p className='text-sm text-gray-400'>{slide.description}</p>
                                        <div className='flex gap-5 justify-start align-bottom'>
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
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

                <div className='py-8 pt-10'>
                    <p className='font-custom2 lg:text-3xl text-2xl pb-6'>2 Comments</p>

                    <div className='flex flex-col gap-8'>
                    {/* 1st comment */}
                        <div className='flex gap-5 bg-[#C5A57217] px-5 py-8'>
                            <div>
                                <img src={rp1}/>    
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <p className='font-custom2 text-2xl'>Emilie D' Amore</p>
                                    <button>Reply</button>
                                </div>
                                <div className='flex flex-col justify-between pt-1'>
                                    <p className='text-sm text-gray-400 pb-2'>21-04-2020 at 03:00 PM</p>
                                    <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro tempore sapiente aliquid quia ducimus?</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd comment */}
                        <div className='grid grid-cols-[5%_95%]'>
                            <div></div>
                            <div className='flex gap-5 bg-[#C5A57217] px-5 py-8'>
                                <div>
                                    <img src={rp2}/>    
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <p className='font-custom2 text-2xl'>Katheryn Kerluke</p>
                                        <button>Reply</button>
                                    </div>
                                    <div className='flex flex-col justify-between pt-1'>
                                        <p className='text-sm text-gray-400 pb-2'>21-04-2020 at 03:00 PM</p>
                                        <p className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error porro tempore sapiente aliquid quia ducimus?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* reply form */}
                <div className='lg:pt-12 pt-2'>
                    <p className='font-custom2 lg:text-3xl text-2xl'>Leave A Reply</p>
                    <p className='text-sm text-gray-400 pt-2'>Your Email address will not be published.</p>

                    <form>
                        <input type='text' placeholder='Comments' className='pb-3 border-b-[1.5px] border-gray-400 focus:outline-none text-sm md:text-base w-full pt-10'/>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 py-10'>
                            <div>
                                <input type='text' placeholder='Name *' className='pb-3 border-b-[1.5px] border-gray-400 focus:outline-none text-sm md:text-base w-full'/> 
                            </div>
                            <div>
                                <input type='email' placeholder='E-mail *' className='pb-3 border-b-[1.5px] border-gray-400 focus:outline-none text-sm md:text-base w-full'/> 
                            </div>
                        </div>
                        <div>
                            <button className='bg-black text-white py-2 px-2.5'>Post Comments</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* grid-col-2 */}
            <div className='w-full flex flex-col gap-10'>

                <div>
                    <p className='font-semibold text-lg pb-4'>Search</p>
                    <div className='border-[1.5px] border-gray-400 py-2 px-3 flex'>
                        <input type='text' placeholder='Search here....' className='focus:outline-none w-full'/><FontAwesomeIcon icon={faMagnifyingGlass} className='relative top-1'/>
                    </div>
                </div>

                <div>
                    <p className='font-semibold text-lg '>Categories</p>
                        {foodcategory.map((category, index)=>(
                            <>
                            <button key={index} onClick={()=> tooglecategory(category.type)} className={`pb-2 pt-3 ${activecategory === category.type ? 'border-none' : 'border-b-[1px] border-gray-400'} w-full flex gap-3 justify-start`}>
                                <span className={`transition-transform ${activecategory === category.type ? 'rotate-90' : 'rotate-0'}`}><FontAwesomeIcon icon={faCaretRight}/></span>
                                <span>{category.type}</span>
                            </button>

                            {activecategory === category.type && (
                                <div className='pl-5'>
                                    <p className='sm:text-base text-sm text-gray-500'>{category.description}</p>
                                </div>
                            )}
                            </>
                        ))}
                </div>

                <div>
                    <p className='font-semibold text-lg '>Recent Post</p>
                    <div>
                        {posts.map((post, index)=>(
                            <div key={index} className={`${post.id !== posts.length ? 'border-b-[1px] border-gray-400 py-5' : 'pt-5 border-none'} flex gap-5`}>
                                <div>
                                    <img src={post.img}/>
                                </div>
                                <div className='lg:py-1 flex flex-col gap-4 justify-between'>
                                    <p className='lg:leading-7'>{post.title}</p>
                                    <p className=' text-gray-400 text-sm md:text-base'>{post.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className='font-semibold text-lg'>Tags</p>
                    <div className='pt-4'>
                        <p>Citrus ~ Creamy ~ Darker ~ Organic ~ Smooth ~ Sweet</p>
                    </div>
                </div>

                <div className='pb-5'>
                    <p className='font-semibold text-lg'>Share Blog</p>
                    <div className='pt-4'>
                        <div className='flex gap-7 justify-start'>
                            <div>
                                <a href='#'><FontAwesomeIcon icon={faFacebookF} className='text-xl'/></a>
                            </div>
                            <div>
                                <a href='#'><FontAwesomeIcon icon={faInstagram} className='text-xl'/></a>
                            </div>
                            <div>
                                <a href='#'><FontAwesomeIcon icon={faLinkedin} className='text-xl'/></a>
                            </div>
                            <div>
                                <a href='#'><FontAwesomeIcon icon={faTwitter} className='text-xl'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default BlogDetailspage
