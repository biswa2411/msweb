import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from 'next/image';
import OfferCard from '@components/lib/cards/OfferCard';

const HeroSection = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <section className="h-screen flex flex-col bg-primary w-full p-14 gap-4">
         <div className='w-full h-1/2 left-0 flex justify-between\ p-2'>
         <Swiper
                slidesPerView={1}
                spaceBetween={70}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={pagination}

                modules={[Autoplay, Pagination]}

                className="w-2/3"
            >
                {["/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp"].map((item, i) => {
                    return (
                        <SwiperSlide key={i}>

                            <div className='flex w-full h-96 justify-center relative'>

                                <div className="relative group rounded-xl overflow-hidden cursor-pointer">
                                    <img
                                        src={item}
                                        alt={`hero-image-${i}`}
                                        className="w-full h-full object-contain "
                                    />
                                    <div className="absolute inset-0 flex items-end justify-end p-20 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-primary text-white text-xl font-bold py-4 px-6 rounded-md shadow-lg hover:bg-primary_lite">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>  </div>

                        </SwiperSlide>
                    )
                })}


            </Swiper>
            <div className='flex flex-col gap-4 justify-between'>
       <OfferCard/>
       <OfferCard/>
      
       </div>
         </div>
       {/* <div className='flex justify-between'>
       <OfferCard/>
       <OfferCard/>
       <OfferCard/>
       <OfferCard/>
       <OfferCard/>
       </div> */}


        </section>
    )
}

export default HeroSection