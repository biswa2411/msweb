import Image from "next/image";
import React from "react";

export const Team = () => {
  return (
    <div className=" bg-[#F0F0F0] flex flex-col items-center justify-center py-[5%] px-[5%]">
      <p className=" bg-gradient-to-b bg-clip-text text-transparent from-primary to-gray-500 font-bold text-[#0e2920] text-[28px] md:text-[36px] lg:text-[48px] pb-5">
        The Executive Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <Image height={348} width={302} src={"/member1.png"} alt="member1" />
        <Image height={348} width={302} src={"/member2.png"} alt="member2" />
        <Image height={348} width={302} src={"/member3.png"} alt="member3" />
        <Image height={348} width={302} src={"/member4.png"} alt="member4" />
      </div>

    </div>
  );
};
