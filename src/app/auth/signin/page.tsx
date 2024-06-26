"use client"
import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


const SignInPage = ({ className, ...props }: any): JSX.Element => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-5 w-[500px]">
      {" "}
      <div className="text-[#fff3e3] text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        Welcome Back{" "}
      </div>
      <div className="bg-[#1e342c] rounded-[40px] p-2 flex flex-row gap-4 items-start justify-start w-full h-14  left-[calc(50%_-_585px)] top-[calc(50%_-_106.5px)] overflow-hidden">

        <Button active label={"Sign In"} onClick={() => router.push("/auth/signin")} /> <Button label={"Signup"} onClick={() => router.push("/auth/signup")} />
      </div>

      <div className="w-full flex flex-col gap-5 text-ms_white">

        <StyledTextField label="Email address or Phone No." variant="outlined" />
        <StyledTextField label="Password" variant="outlined" />
       
      </div>

      <Link href={"/auth/forget-password"} className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-xs font-normal cursor-pointer w-full justify-end flex">
        Forget Password?{" "}
      </Link>
      <div className="bg-[#fff3e3] rounded-[40px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-0 items-center justify-center w-full h-14  left-[calc(50%_-_585px)] top-[688px] overflow-hidden cursor-pointer">
        <div className="text-[#0e2920] text-left font-['InstagramSans-Bold',_sans-serif] text-base font-bold uppercase relative">
          Sign in{" "}
        </div>
      </div>

    </div>
  );
};

export default SignInPage;
