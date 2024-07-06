import React from 'react'
import Shop from '../shop'

const OurServices = () => {
    return (
        <div className='py-10 w-full bg-white flex flex-col justify-center gap-5 items-center'>
            <h1 className='text-5xl font-bold'>
                Our Services
            </h1>
            <p className='w-4/5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi molestias impedit asperiores, accusamus quibusdam, modi neque blanditiis dolorem ea sit eius odit eveniet sapiente repudiandae minus quaerat odio! Maxime?
            </p>
           <div className='w-4/5 pt-10'>
           <Shop />
           </div>
        </div>
    )
}

export default OurServices