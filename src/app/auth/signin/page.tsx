"use client"
import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"


const SignInPage = ({ className, ...props }: any): JSX.Element => {
  const router = useRouter()

  return (
    <div className={style['wrapper']}>
      <div className={style['title']}>
        Welcome Back
      </div>
      <div className={style['btn-switch']}>
        <Button active label={"Sign In"} onClick={() => router.push("/auth/signin")} /> <Button label={"Signup"} onClick={() => router.push("/auth/signup")} />
      </div>
      <div className="flex flex-col gap-5 text-ms_white">
        <StyledTextField label="Email address or Phone No." variant="outlined" />
        <StyledTextField label="Password" variant="outlined" />
      </div>
      <Link href={"/auth/forget-password"} className=" text-left text-xs font-bold cursor-pointer w-full justify-end flex">
        Forget Password?
      </Link>
      <div className={style["final-btn"]}
        onClick={() => router.push("/")}>
        <div className={style["btn-text"]}>
          sign in
        </div>
      </div>

      
    </div>
  );
};

export default SignInPage;
