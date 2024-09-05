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
        {
            image: "https://via.placeholder.com/200",
            name: "Wildflower Meadow",
            mrp: 2800,
            offerPrice: 2200,
        },
        {
            image: "https://via.placeholder.com/200",
            name: "Aurora Borealis",
            mrp: 6000,
            offerPrice: 5000,
        },
    ];

    return (
        <section className=' w-full bg-primary p-14 text-white overflow-hidden'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-[32px] leading-[41.6px] font-bold w-1/3' >Elevate Your Walls: Explore the Newest in Canvas and Matte Artistry!</h1>
                <p className='text-[16px] leading-[24px] font-semibold w-1/3'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div>

                <div className='grid grid-cols-5 gap-5 w-full mt-10  overflow-x-auto'>

                    {
                        products.map((i, k) => {
                            return (
                                <ProductCard key={k} image={i.image} mrp={i.mrp} name={i.name} offerPrice={i.offerPrice} />
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Gallery