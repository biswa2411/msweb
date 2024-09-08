import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex md:flex-row flex-col px-5 md:px-10 lg:px-20 pt-5 md:pt-10 bg-[#f8f8f8]">
      <div className="w-full md:w-2/3 md:pr-20 flex flex-col justify-center text-center md:text-start gap-10">
        <div className="w-full pt-[10%] font-semibold italic text-[#0e2920] text-[24px]  tracking-[0] leading-[normal]">
          ABOUT US
        </div>
        <p className="w-full font-bold text-[#0e2920] text-[16px] lg:text-[18px] tracking-[0] leading-[normal]">
          Welcome to MS Art Life, your gateway to a world of captivating and
          customized artworks!
        </p>
        <p className="w-full pb-[10%] font-medium text-[#0e2920] text-[14px] md:text-[16px] tracking-[0] leading-[normal]">
          Your online source for unique digital paintings. Transform your space
          with our curated collection.
        </p>
      </div>
      <div className="w-full md:w-1/3 items-end flex justify-center ">
        <Image
          height={660}
          width={593}
          alt="Rectangle"
          src="/swayampadhi.png"
        />
      </div>
    </div>
  );
};
