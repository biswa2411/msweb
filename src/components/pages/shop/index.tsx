"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Shop = () => {
    const shoppingItems = [
        {
            img: "/auth/auth1.jpg",
            paintingType: "Digital Painting",
            price: "600",
            id: "1",
        },
        {
            img:  "acrylic.jpg",
            paintingType: "Acrylic Painting",
            price: "1000",
            id: "2",
        },
        {
            img: "sketch.jpg",
            paintingType: "Sketch Art",
            price: "1200",
            id: "3",
        },
    ];

    return (
        <div className="flex justify-between w-full gap-4">
            {shoppingItems.map((items, index) => (
                <Link 
                    key={index} 
                    href={`/product-info/${items.id}`}
                    className="shadow-custom h-fit w-[450px] rounded-lg p-1 justify-start flex flex-col items-center gap-2"
                >
                    <div className="h-[350px] w-full">
                        <img
                            src={items.img}
                            alt="profile image"
                            className="rounded-lg h-full w-full"
                        />
                    </div>
                    <div className="flex justify-between items-center px-2 w-full">
                        <p className="font-bold text-[#000000] text-[16px] md:text-[20px]">
                            {items.paintingType}
                        </p>
                        <button className="flex border hover:bg-[#0E2920] text-[#0E2920] hover:text-white border-[#0E2920] py-2 px-3 rounded-full">
                            <p>Starts at ₹</p>
                            <p>{items.price}</p>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Shop;
