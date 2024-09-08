import Image from "next/image";
import React from "react";

export const OurStory = () => {
  return (
    <div className="  flex flex-col justify-center items-center bg-[#0e2920]">
      <div className="px-[3%] lg:px-[5%] text-[#fff3e3]">
        <div className="flex px-[3%] items-center justify-center gap-[24px] py-[4%] bg-[#1e342c] rounded-[24px] overflow-hidden flex-col mt-10">
          <div className=" font-bold  text-[24px] md:text-[36px] lg:text-[48px] text-center ">
            Our Story
          </div>
          <p className=" self-stretch [font-family:'Poppins-Medium',Helvetica] font-medium text-[14px] md:text-[16px] text-center tracking-[0] leading-[normal]">
            Founded in November 2022 by a trio of visionary creators – Subham
            Sahoo (Chief Executive Officer), Manash Ranjan Sahoo (Chief Design
            Officer), and Devi Sarthak Swain (Chief Growth Officer) – MS Art
            Life began as a spark of inspiration in the vibrant city of
            Hyderabad, India. Once, a friend’s birthday was just around the
            corner, and Subham was on the hunt for a unique gift. Amidst the
            search, destiny intervened, and he stumbled upon his uncle, Manash,
            passionately crafting a digital portrait of a girl.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  py-[5%]">
        <Image width={800} height={480} alt="Rectangle" src="/ourstory.png" />
        <div className="flex lg:justify-start items-center px-[3%] lg:px-[5%] py-[5%] text-[#FFF3E3]">
          <div className="">
            <div className="">
              <div className="font-bold text-[32px] py-2">VISION</div>
              <p className="">
                To inspire creativity and create incredible digital art through
                the perfect blend of traditional craftsmanship and modern
                technology. We envision being recognized for our innovative and
                high-resolution art, custom-made for every individual.
              </p>
            </div>
            <div className="">
              <div className="font-bold text-[32px] py-2">CORE VALUE</div>
              <div className="">
                <ul className="list-disc pl-4">
                  <li className="">
                    Happy Customers: We work hard to make you happy, providing a
                    smooth and enjoyable shopping experience.
                  </li>
                  <li className="">
                    Personal Connection: Every creation embodies a personal
                    touch, forging an emotional bond between the art and its
                    admirer.
                  </li>
                  <li className="">
                    Be Creative: We love imagination and creating amazing
                    digital artworks that capture your imagination.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
