"use client"
import Gallery from '@components/pages/home/Gallery';
import GoogleReviews from '@components/pages/home/Testimonial';
import HeroSection from '@components/pages/home/HeroSection';
import 'react-awesome-slider/dist/styles.css';
import OurServices from '@components/pages/home/OurServices';
import WhyUs from '@components/pages/home/WhyUs';
import FaqAccordion from '@components/pages/faq/FaqAccordion';
import { useState } from 'react';


const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='h-full w-full relative'>

      <div className='fixed  z-50   bottom-2 left-2 flex gap-2 items-end'>
        <button className={`size-14 bg-gradient-to-bl from-yellow-100 via-amber-300 to-amber-500 rounded-full text-ms_white font-bold shadow-custom ${open ? 'animate-none' : 'animate-bounce'}`} onClick={() => setOpen(!open)}>
          AI
        </button>
        <div className={`flex overflow-hidden  rounded-t-3xl rounded-br-3xl -top-80 bg-gradient-to-bl from-yellow-100 via-amber-300 to-amber-500 shadow-custom text-gray-400 font-semibold  transition-[max-width max-height]  duration-500 ease-in-out ${open ? 'max-w-96 max-h-96' : 'max-w-0 max-h-0'}`}>
          <div className='m-5 h-80 w-56'>
            dssdsd
          </div>
        </div>
      </div>
      <HeroSection />
      <Gallery />
      <OurServices />
      <GoogleReviews />
      <WhyUs />

      <div className='py-10 w-full gap-3 md:gap-10 bg-white flex flex-col justify-center items-center text-primary'>
        <h1 className='text-2xl md:text-5xl font-bold'>
          FAQs
        </h1>
        <div className='w-2/3'>

          <FaqAccordion />
        </div>
      </div>

    </div>
  );
}

export default Home