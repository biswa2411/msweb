import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css';
import ProductCard from '@components/lib/cards/ProductCard';


interface Product {
    image: string;
    name: string;
    mrp: number;
    offerPrice: number;
}

const Gallery = () => {
    const products: Product[] = [
        {
            image: "https://via.placeholder.com/200",
            name: "Starry Night Sky",
            mrp: 3000,
            offerPrice: 2500,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Sunset Over Mountains",
            mrp: 3500,
            offerPrice: 2800,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Abstract Waves",
            mrp: 4000,
            offerPrice: 3200,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Forest in Autumn",
            mrp: 4500,
            offerPrice: 3700,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Cosmic Explosion",
            mrp: 5000,
            offerPrice: 4200,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "City at Night",
            mrp: 3800,
            offerPrice: 3100,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Ocean's Serenity",
            mrp: 4200,
            offerPrice: 3400,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Golden Horizon",
            mrp: 3200,
            offerPrice: 2600,
        },

    ];

    return (
        <section className=' w-full bg-primary px-2 sm:p-14 sm:py-14 py-10  text-white overflow-hidden flex flex-col gap-10'>
            <div className='flex flex-col sm:flex-row justify-between gap-4'>
                <h1 className='text-lg sm:text-[32px] sm:leading-[41.6px] font-bold w-full sm:w-1/3' >Elevate Your Walls: Explore the Newest in Canvas and Matte Artistry!</h1>
                <p className='text-[16px] leading-[24px] font-light sm:font-semibold w-full sm:w-1/3'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div className='flex flex-wrap gap-2 w-full overflow-x-auto justify-center'>

                {
                    products.map((i, k) => {
                        return (
                            <ProductCard key={k} image={i.image} mrp={i.mrp} name={i.name} offerPrice={i.offerPrice} />
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Gallery