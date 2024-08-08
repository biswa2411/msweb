import Image from "next/image";
import React from "react";

export const WhatMakesUsDiff = () => {
  return (
    <div className=" py-[5%]">
      <div className=" font-bold text-[#0e2920] text-[28px] md:text-[36px] lg:text-[48px] text-center ">
        WHAT MAKES US DIFFERENT?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="p-[3%] md:p-[6%] lg:p-[10%] text-center lg:text-start">
            <p className=" font-bold text-[#0e2920] text-[24px] md:text-[28px] lg:text-[32px] ">
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
        <Image width={719} height={472} alt="Rectangle1" src="/frame1.png" />

        <div className="flex justify-end items-start">
          <Image width={719} height={472} alt="Rectangle2" src="/frame2.png" />
        </div>
        <div className="flex justify-center items-center">
          <div className="p-[3%] md:p-[6%] lg:p-[10%] text-center lg:text-start">
            <div className=" font-bold text-[#0e2920] text-[24px] md:text-[28px] lg:text-[32px]">
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
