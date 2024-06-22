import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const HeroSection = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <section className="h-[700px] flex items-center w-full p-14 bg-white">
            <Swiper
                slidesPerView={1}
                spaceBetween={70}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={pagination}

                modules={[Autoplay, Pagination]}

                className="mySwiper"
            >
                {["/home/hero/hh1.jpg", "/home/hero/hh2.jpg", "/home/hero/hh3.jpg", "/home/hero/hh4.jpg"].map((item, i) => {
                    return (
                        <SwiperSlide key={i}>

                            <img src={item} className='h-[620px] w-full object-cover rounded-xl' />
                        </SwiperSlide>
                    )
                })}


            </Swiper>

        </section>
    )
}

export default HeroSection