"use client"
import Gallery from '@components/pages/home/Gallery';
import GoogleReviews from '@components/pages/home/Testimonial';
import HeroSection from '@components/pages/home/HeroSection';
import 'react-awesome-slider/dist/styles.css';
import OurServices from '@components/pages/home/OurServices';
import WhyUs from '@components/pages/home/WhyUs';


const Home = () => {

  return (
    <>
      <HeroSection />
      <Gallery />
      <OurServices />
      <GoogleReviews />
      <WhyUs />
    </>
  );
}

export default Home