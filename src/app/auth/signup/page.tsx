"use client"

import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"

export interface ISignupPageProps {
  className?: string;
}

const SignupPage = ({
  className,
  ...props
}: any): JSX.Element => {

  const router = useRouter()


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (


    <div className={style["wrapper"]}>
      {" "}
      <div className={style['title']}>
        Create Account{" "}
      </div>
      <div className={style['btn-switch']}>

        <Button label={"Sign In"} onClick={() => router.push("/auth/signin")} />
        <Button active label={"Signup"} onClick={() => router.push("/auth/signup")} />
      </div>

      <div className="w-full flex flex-col gap-5  ">

        <StyledTextField label="Email address or Phone No." variant="outlined" />
        <StyledTextField label="Password" variant="outlined" />

        <div className="flex gap-2 items-center w-full ">
          <Checkbox {...label} sx={{
            color: "#fff3e3",
            '&.Mui-checked': {
              color: '#2F463E',
            },
          }} />

          <p className="text-wrap ">By signing up, you agree to our <span className="cursor-pointer hover:text-secondary font-semibold">Terms</span> , <span className="cursor-pointer hover:text-secondary  font-semibold">Privacy Policy</span> and <span className="cursor-pointer hover:text-secondary  font-semibold" >
            Cookies Policy</span> .</p>

        </div>
      </div>



      <div className={style["final-btn"]}
        onClick={() => router.push("/")}>
        <div className={style["btn-text"]}>
          sign up
        </div>
      </div>

    </div>
  );
};


export default SignupPage