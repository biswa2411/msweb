import axios from 'axios';
import React from 'react'

const GoogleReviews = () => {

  const fetchGoogleReviews = async (placeId:any, apiKey:any) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`);
      
      console.log("🚀 ~ fetchGoogleReviews ~ response:", response)
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
  console.log("🚀 ~ fetchGoogleReviews ~ fetchGoogleReviews:", fetchGoogleReviews("aaa", "aaa"))

  
  return (
    <div className='h-96'>
ihiii
    </div>
  )
}

export default GoogleReviews