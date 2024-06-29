"use client";
import { Rating } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

const mockItems = [
    {
        id: '1',
        rating: 3.2,
        content: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, .',
        image: 'https://lh3.googleusercontent.com/a-/ALV-UjVTNs3urQZpoh1qJrPBtNeg5vcPWhoiC1XoDRJVWBBOj4MhLCrjqA=w60-h60-p-rp-mo-ba5-br100'

    },
    {
        id: '2',
        rating: 2.8,
        content: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, .'
    },
    {
        id: '3',
        rating: 4.5,
        content: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, .'
    },
    {
        id: '4',
        rating: 3.8,
        content: 'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, .'
    },
    {
        id: '5',
        rating: 1.8,
        content: 'Korem ipsum dolor sit amet, consectetur adet condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, .'
    }
];


const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        getCurrentActiveSlide
    } = useSpringCarousel({
        itemsPerSlide: 3,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 24,
        items: mockItems.map((item, index) => ({
            ...item,
            renderItem: (
                <div
                    key={item.id}
                    className={` aspect-[2] w-full justify-start py-5 gap-5 items-center flex flex-col transition-all duration-700 rounded-3xl bg-white ${activeIndex === index ? 'z-10 scale-150 ' : 'opacity-55 '}`}
                    style={{
                        transform: activeIndex === index ? 'scale(1.2) ' : 'scale(0.8)',
                        zIndex: activeIndex === index ? 10 : 1
                    }}
                >
                    <div className='flex flex-col gap-2 items-center justify-center '>

                   {item?.image? <img src={item?.image} alt="ss"  className='h-20 w-20 rounded-full' />:<div className='h-20 w-20 rounded-full bg-gray-500' />}
                        <Rating readOnly name="half-rating" defaultValue={item.rating} precision={0.1} /></div>
                    <p className=' w-4/5 text-center text-sm'> {item.content}</p>
                </div>
            )
        }))
    });

    const handlePrev = () => {
        slideToPrevItem()
        activeIndex === 0 ? setActiveIndex(mockItems.length - 1) : setActiveIndex(activeIndex - 1)
    }
    const handleNext = () => {
        slideToNextItem()
        activeIndex === mockItems.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)
    }
    return (
        <div className="py-10 relative bg-primary" >
            <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="mx-auto w-[85%] overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default TestimonialCarousel;
