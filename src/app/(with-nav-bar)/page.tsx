"use client"
import Gallery from '@components/pages/home/Gallery';
import HeroSection from '@components/pages/home/HeroSection';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {

  return (
    <>
      <HeroSection />
      <Gallery/>
    </>
  );
}

export default Home