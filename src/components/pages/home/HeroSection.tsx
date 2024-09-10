
import "swiper/css/bundle";
import OfferCard from '@components/lib/cards/OfferCard';
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const HeroSection = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + '</span>';
        },
    };


    const properties = {
        duration: 1000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
        cssClass: "height: 70px",
    };

    const slideImages = ["/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp"]

    return (
        <section className="h-screen flex flex-col bg-primary w-full -mt-[92px] px-14 pt-[92px] gap-4">
            <div className='w-full h-4/5 left-0 flex justify-between p-2 gap-4 '>


                <div className="h-full w-4/5 ">
                    <Slide  {...properties}>
                        {slideImages.map((each, i) => (
                            // <img
                            //      src={each}
                            //     key={index}
                            //     alt="sample"
                            //     className="w-full h-full object-fill bg-green-400 rounded-lg"
                            // />
                            <div key={i} className='flex w-full h-full justify-center relative rounded-lg'>
                                <div className="relative group rounded-lg h-full w-full overflow-hidden cursor-pointer">
                                    <img
                                        src={each}
                                        alt={`hero-image-${i}`}
                                        className="w-full h-full object-fill rounded-lg "
                                    />
                                    <div className="absolute inset-0 flex items-end justify-end p-20 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                        <button className="bg-primary text-white text-xl font-bold py-4 px-6 rounded-md shadow-lg hover:bg-primary_lite">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>

                <div className='flex flex-col gap-4  w-1/5'>
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />

                </div>
            </div>



        </section>
    )
}

export default HeroSection