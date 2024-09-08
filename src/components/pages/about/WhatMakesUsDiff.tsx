import Image from "next/image";
import React from "react";

export const WhatMakesUsDiff = () => {
  return (
    <div className=" py-[5%]">
      <div className=" font-bold text-[#0e2920] text-[28px] md:text-[36px] lg:text-[48px] text-center pb-[3%]">
        WHAT MAKES US DIFFERENT?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="px-[3%] md:px-[5px] lg:px-[10%] py-[3%] text-center lg:text-start">
            <p className=" font-bold text-[#0e2920] text-[20px] md:text-[24px] lg:text-[28px] ">
              Handmade with Love, just for you.
            </p>
            <p className=" font-medium text-[#0e2920] text-[16px] ">
              Our digital art is a labor of love, crafted with passion and
              devotion. Like traditional artists, our team pours heart and soul
              into each piece, creating a masterpiece that blends artistry and
              technology. Each artwork is a unique fusion of creativity, making
              it truly special. Feel the emotions and experience the magic
              behind our handcrafted digital art.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Image width={1000} height={472} alt="Rectangle1" src="/frame1.png" />
        </div>

        <div className="flex justify-center items-center md:justify-end md:items-end order-4 md:order-none">
          <Image width={1000} height={472} alt="Rectangle2" src="/frame2.png" />
        </div>
        <div className="flex justify-center items-center order-3 md:order-none">
          <div className="p-[3%] md:p-[6%] lg:p-[10%] text-center lg:text-start">
            <div className=" font-bold text-[#0e2920] text-[20px] md:text-[24px] lg:text-[28px]">
              Our Artisans
            </div>
            <p className="font-medium text-[#0e2920] text-[16px]">
              Meet our gifted artisans, the heart of our company, breathing life
              into digital art. With a deep grasp of traditional techniques and
              adeptness in modern digital tools, our talented team creates
              stunning masterpieces. Each brushstroke, texture, and detail is
              thoughtfully crafted, evoking emotions and exuding excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
