"use client"
import Gallery from '@components/pages/home/Gallery';
import GoogleReviews from '@components/pages/home/GoogleReviews';
import HeroSection from '@components/pages/home/HeroSection';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {

  return (
    <>
      <HeroSection />
      <Gallery/>
      <GoogleReviews/>
    </>
  );
}

export default Home