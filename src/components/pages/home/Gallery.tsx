import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css';


const Gallery = () => {

    return (
        <section className='h-[800px] w-full bg-primary p-14 text-white overflow-hidden'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-[32px] leading-[41.6px] font-bold w-1/3' >New Arrival
                Explore our new collection of canvas and matte prints </h1>
                <p className='text-[16px] leading-[24px] font-semibold w-1/3'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div>
                <div className='flex flex-row gap-5 w-full justify-end'>
                    <div className='h-8 w-8 rounded-full bg-white ' />
                    <div className='h-8 w-8 rounded-full bg-gray-500 ' />
                </div>
                <div className='flex flex-row gap-5 w-full mt-10 ml-20 pr-20 overflow-x-auto'>
                    {/* <img src="/home/hero/hh1.jpg" className='h-[519px] w-[519px]  object-cover rounded-2xl' />
                    <img src="/home/hero/hh1.jpg" className='h-[519px] w-[519px]  object-cover rounded-2xl' />
                    <img src="/home/hero/hh1.jpg" className='h-[519px] w-[519px]  object-cover rounded-2xl' />
                    <img src="/home/hero/hh1.jpg" className='h-[519px] w-[519px]  object-cover rounded-2xl' /> */}

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={70}
                        navigation={true}

                        modules={[Navigation]}

                        className="mySwiper"
                    >
                        {["/home/hero/hh1.jpg", "/home/hero/hh2.jpg", "/home/hero/hh3.jpg", "/home/hero/hh4.jpg"].map((item, i) => {
                            return (
                                <SwiperSlide key={i} >

                                    <img src={item} className='h-[519px] w-[519px]  object-cover rounded-2xl' />
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>

                </div>
            </div>

        </section>
    )
}

export default Gallery