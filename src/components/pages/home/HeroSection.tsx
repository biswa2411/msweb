import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Image from 'next/image';

const HeroSection = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <section className="h-[700px] flex items-center w-full p-14 bg-primary">
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

                className="mySwiper"
            >
                {["/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp"].map((item, i) => {
                    return (
                        <SwiperSlide key={i}>

                            <div className='flex w-full justify-center relative'>

                                <div className="relative group w-fit h-[620px] rounded-xl overflow-hidden cursor-pointer">
                                    <img
                                        src={item}
                                        alt={`hero-image-${i}`}
                                        className="w-full h-full object-contain bg-red-400"
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

        </section>
    )
}

export default HeroSection