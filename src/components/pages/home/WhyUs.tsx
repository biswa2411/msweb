import { Gif } from '@mui/icons-material';
import React from 'react'

const WhyUs = () => {

    const features = [
        {
            name: "PAN India Delivery",
            description: "We offer fast and reliable delivery across all locations in India, ensuring your order reaches you safely and on time.",
            gif: '/gif/delivery.gif'
        },
        {
            name: "24x7 Support",
            description: "Our dedicated support team is available around the clock to assist you with any queries or concerns.",
            gif: '/gif/24-support.gif'
        },
        {
            name: "Warranty on Paintings",
            description: "All our paintings come with a warranty, guaranteeing their quality and authenticity for your peace of mind.",
            gif: '/gif/warranty.gif'

        },
        {
            name: "Durable Product",
            description: "Our products are crafted with high-quality materials, ensuring durability and long-lasting satisfaction.",
            gif: '/gif/durability.gif'

        }
    ];

    return (
        <div className='py-10 w-full gap-10 bg-white flex flex-col justify-center items-center text-primary'>
            <h1 className='text-5xl font-bold'>
                Why Us
            </h1>
            <p className='w-4/5 text-3xl text-center'>
                Turning your ideas into stunning digital art with unmatched artistry and detail.      </p>
            <div className='w-4/5  flex justify-evenly'>

                {features.map((i, k) => {
                    return (<div key={k} className=' w-52 gap-3 flex flex-col items-center justify-between'>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <div className="h-28 w-28 rounded-full bg-white bg-opacity-10 backdrop-blur-lg shadow-custom p-4 flex items-center justify-center">

                                <img
                                    src={i?.gif} // Replace with your GIF URL or path
                                    alt={i?.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <p className='font-bold text-xl text-nowrap'>
                                {i?.name}
                            </p>
                        </div>
                        <p className='text-center'>
                            {i?.description}
                        </p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default WhyUs