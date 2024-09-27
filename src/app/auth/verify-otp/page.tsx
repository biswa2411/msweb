"use client"
import { useState } from "react";
import { OTP } from "@components/lib/inputs/OTP"
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"

const OtpVerification = ({
  className,
  ...props
}: any): JSX.Element => {
  const [otp, setOtp] = useState<string>("")
  const router = useRouter()
  return (

    <div className={style['wrapper']}>
      {" "}
      <div className="text-ms_white text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        Just one more step
      </div>

      <p className="w-full text-primary text-wrap text-center font-semibold">{`Enter the 6-digit code we sent to: xxxxx@gmail.com`}

      </p>


      <div className="w-full flex flex-col justify-center items-center gap-5 text-ms_white">

        <OTP separator={<span>{" "}</span>} value={otp} onChange={setOtp} length={6} />


      </div>


      <div className={style["final-btn"]} onClick={() => router.push("/auth/reset-password")}>
        <div className={style["btn-text"]}>
          Confirm
        </div>
      </div>


    </div>
  );
};


export default OtpVerification