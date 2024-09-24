"use client";
import { Rating } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

const mockItems = [
    {
        id: '1',
        rating: 5,
        content: 'MS Art Life can transformed cherished memories into breathtaking digital paintings. Their precision with pen-tab and stylus brought out every delicate detail. The high-quality printing on premium paper or canvas, coupled with custom frame designs, truly elevated the artwork. Fast delivery and hassle-free refund/replacement make them a reliable choice. Highly recommend!.',
        image: `https://lh3.googleusercontent.com/a-/ALV-UjVTNs3urQZpoh1qJrPBtNeg5vcPWhoiC1XoDRJVWBBOj4MhLCrjqA=w75-h75-p-rp-mo-ba5-br100`

    },

    {
        id: '2',
        rating: 5,
        content: `Incredible experience, the art that they make is really overwhelming and amazing. Book your art now If you already haven't.`,
        image: `https://lh3.googleusercontent.com/a-/ALV-UjVptWvY9NySZ68CNLMbAf3cEO75TQ-zD-4QAuhBYYF5CWDDMohLBg=w75-h75-p-rp-mo-br100`
    },

    {
        id: '3',
        rating: 5,
        content: 'The best art shop ever. Quality of the product was really fantastic and eye catching... Just go for it...!!',
        image: `https://lh3.googleusercontent.com/a-/ALV-UjUJHWCkFISY1CxO6sAU2xp4Lx2sMZJ1s95M0dQI407vi3miOUgj=w75-h75-p-rp-mo-br100`
    },
    {
        id: '4',
        rating: 5,
        content: `It's a genuine quality product..I love it. Finishing work.`,
        image: `https://lh3.googleusercontent.com/a-/ALV-UjXwIsXiW9F34F7RzVEAc135e7w02hwrOHEwK4lrBpLY_Q_foSla-A=w75-h75-p-rp-mo-ba3-br100`

    }


];



const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [width, setWidth] = useState<number>();

    useEffect(() => {
      // Function to update width state
      const handleResize = () => setWidth(innerWidth);
  
      // Listen to window resize event
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        getCurrentActiveSlide
    } = useSpringCarousel({
        itemsPerSlide: width&&width<840?1:3,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 24,
        items: mockItems.map((item, index) => ({
            ...item,
            renderItem: (
                <div
                    key={item.id}
                    className={`w-[95%] xmd:w-full justify-center xmd:justify-start py-5 gap-5 items-center flex flex-col transition-all duration-700 rounded-3xl bg-white ${activeIndex === index ? 'z-10 scale-100 xl:scale-110' : 'opacity-55 hidden md:flex xl:scale-90 md:scale-75'}`}
                  
                >
                    <div className='flex flex-col gap-2 items-center justify-center '>

                        {item?.image ? <img src={item?.image} alt="ss" className='h-20 w-20 rounded-full' /> : <div className='h-20 w-20 rounded-full bg-gray-500' />}
                        <Rating readOnly name="half-rating" defaultValue={item.rating} precision={0.1} /></div>
                    <p className=' w-4/5 text-center text-xs md:text-sm'> {item.content}</p>
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
        <div className="py-10 relative bg-primary justify-center flex flex-col items-center" >
            
            <h1 className='text-2xl md:text-5xl font-bold text-secondary'>
        Happy Customers
            </h1>
         
            <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 z-10 -translate-x-full left-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
           <div className='flex w-full'>
           <div className="mx-auto flex w-1/2 xmd:w-full items-center justify-center overflow-x-clip py-[4%] relative ">
                {carouselFragment}
            </div>
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
