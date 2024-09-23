import React from 'react'
import Shop from '../shop'

const OurServices = () => {
    return (
        <div className='py-10 gap-4 px-2 w-full bg-white flex flex-col justify-center sm:gap-5 items-center text-primary'>
            <h1 className='sm:text-5xl text-2xl font-bold'>
                Shop By Categories
            </h1>
            <p className='sm:w-4/5 sm:text-2xl text-lg'>
            Find Your Perfect Piece: Shop by Range and Discover the Art That Speaks to You! </p>
           <div className='sm:w-4/5 sm:pt-10'>
           <Shop />
           </div>
        </div>
    )
}

export default OurServices