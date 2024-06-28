import React from 'react'

const WhyUs = () => {
    return (
        <div className='py-10 w-full bg-white flex flex-col justify-center gap-5 items-center'>
            <h1 className='text-5xl font-bold'>
                Why Us
            </h1>
            <p className='w-4/5 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi molestias impedit asperiores, accusamus quibusdam, modi neque blanditiis dolorem ea sit eius odit eveniet sapiente repudiandae minus quaerat odio! Maxime?
            </p>
            <div className='w-4/5 pt-10 flex justify-evenly'>
                {[1, 2, 3, 4].map((i) => {
                    return (<div key={i} className=' w-52 gap-3 flex flex-col items-center justify-center'>
                        <div className='h-28 w-28 rounded-full bg-gray-500'>

                        </div>
                        <p className='font-bold'>
                            Qorem ipsum
                        </p>
                        <p className='text-center'>
                            Morem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default WhyUs