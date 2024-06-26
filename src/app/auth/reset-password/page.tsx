"use client"
import StyledTextField from '@components/lib/inputs/StyledTextField';
import { useRouter } from 'next/navigation';
import React from 'react'

const Resetpage = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-5 w-[500px]">
      {" "}
      <div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        Reset Password{" "}
      </div>


      <div className="w-full flex flex-col gap-5 text-ms_white">

        <StyledTextField label="Enter New Password" variant="outlined" />
        <StyledTextField label="Confirm Password" variant="outlined" />

      </div>


      <div className="bg-[#fff3e3] hover:bg-[#ded6cc] active:bg-[#bfb5a9] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-full h-14  left-[calc(50%_-_585px)] top-[688px] overflow-hidden cursor-pointer"
        onClick={() => router.push("/")}>
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Change Password{" "}
        </div>
      </div>


    </div>
  );
};

export default Resetpage