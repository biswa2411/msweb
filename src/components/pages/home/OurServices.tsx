import React from 'react'
import Shop from '../shop'

const OurServices = () => {
    return (
        <div className='py-10 w-full bg-white flex flex-col justify-center gap-5 items-center text-primary'>
            <h1 className='text-5xl font-bold'>
                Shop By Categories
            </h1>
            <p className='w-4/5 text-2xl font-serif'>
            Find Your Perfect Piece: Shop by Range and Discover the Art That Speaks to You! </p>
           <div className='w-4/5 pt-10'>
           <Shop />
           </div>
        </div>
    )
}

export default OurServices