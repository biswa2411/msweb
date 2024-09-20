"use client"
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { useRouter } from "next/navigation";

const ForgetPassword = ({
  className,
  ...props
}: any): JSX.Element => {

  const router = useRouter()


  return (

    <div className="flex flex-col gap-5 w-[400px]">
      {" "}
      <div className="text-ms_white text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        Trouble logging in?{" "}
      </div>

      <p className="w-full text-ms_white text-wrap text-center">{`Enter your email, phone, or username and we'll send you a link to get back into your account.`}

      </p>


      <div className="w-full flex flex-col gap-5 text-ms_white">

        <StyledTextField label="Email address or Phone No." variant="outlined" />


      </div>

      <div className="bg-[#fff3e3] hover:bg-[#ded6cc] active:bg-[#bfb5a9] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-full h-14  left-[calc(50%_-_585px)] top-[688px] overflow-hidden cursor-pointer" 
      onClick={()=>router.push("/auth/verify-otp")}>
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Send Otp{" "}
        </div>
      </div>

    </div>
  );
};

export default ForgetPassword;
