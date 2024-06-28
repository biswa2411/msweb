
import TestimonialCarousel from '@components/lib/carousel/TestimonialCarousel';
import axios from 'axios';
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const GoogleReviews = () => {

  const fetchGoogleReviews = async (placeId: any, apiKey: any) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`);
      if (response.data.result) {
        return response.data.result.reviews;
      } else {
        throw new Error('Unable to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      return [];
    }
  };
  const items = ["/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp", "/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp", "/home/hero/hh1.webp", "/home/hero/hh2.webp", "/home/hero/hh3.webp"]

  return (

    <TestimonialCarousel />

  )
}

export default GoogleReviews