"use client"
import { useState } from "react";
import { OTP } from "@components/lib/inputs/OTP"
import { useRouter } from "next/navigation";

const OtpVerification = ({
  className,
  ...props
}: any): JSX.Element => {
  const [otp, setOtp] = useState<string>("")
  const router = useRouter()
  return (

    <div className="flex flex-col gap-5 w-[400px]">
      {" "}
      <div className="text-ms_white text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        Just one more step
      </div>

      <p className="w-full text-ms_white text-wrap text-center">{`Enter the 6-digit code we sent to: xxxxx@gmail.com`}

      </p>


      <div className="w-full flex flex-col justify-center items-center gap-5 text-ms_white">

        <OTP separator={<span>{" "}</span>} value={otp} onChange={setOtp} length={6} />


      </div>

      <div className="bg-[#fff3e3] hover:bg-[#ded6cc] active:bg-[#bfb5a9] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-full h-14  left-[calc(50%_-_585px)] top-[688px] overflow-hidden cursor-pointer"
        onClick={() => router.push("/auth/reset-password")}>
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Confirm{" "}
        </div>
      </div>

    </div>
  );
};


export default OtpVerification