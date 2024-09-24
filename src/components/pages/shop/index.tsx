"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Shop = () => {
    const shoppingItems = [
        {
            img: "/auth/auth1.jpg",
            paintingType: "Digital Painting",
            path: 'digital',
            price: "600",
            id: "1",
        },
        {
            img: "acrylic.jpg",
            paintingType: "Acrylic Painting",
            path: 'acrylic',
            price: "1000",
            id: "2",
        },
        {
            img: "sketch.jpg",
            paintingType: "Sketch Art",
            price: "1200",
            path: 'sketch',
            id: "3",
        },
    ];
    const path = usePathname()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shoppingItems.map((items, index) => (
                <Link
                    key={index}
                    href={`/product-info/${items.path}`}
                    className="shadow-custom h-fit rounded-lg p-1 justify-start flex flex-col items-center gap-2"
                >
                    <div className="h-[350px] w-full relative">
                        <Image src={items.img} alt={items.paintingType} fill priority={path.includes('shop')} />
                    </div>
                    <div className="flex justify-between items-center px-2 w-full my-2">
                        <p className="font-bold text-[#000000] text-[16px] md:text-[20px]">
                            {items.paintingType}
                        </p>
                        <button className="flex border hover:bg-[#0E2920] text-[#0E2920] hover:text-white border-[#0E2920] py-1 px-2 rounded-full">
                            <p>Starts at ₹{items.price}</p>
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Shop;
