"use client"
import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"
import { useState } from "react";
import { LOGIN } from "@services/graphql/mutations/auth";
import { useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { encodeData } from "@services/utils/secure";


const SignInPage = ({ className, ...props }: any): JSX.Element => {
  const router = useRouter()
  const [emailOrUsername, setEmailOrUsername] = useState("")
  const [password, setPassword] = useState("")
  const [singIn ,{loading, error, data}] = useMutation(LOGIN)

  const handleSignIn = async () => {
    try {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      
      // Check if input matches email pattern
      const isEmail = emailPattern.test(emailOrUsername);
      
      // Determine the type of input
      const input = isEmail ? 'email' : 'username';
  
      // Show loading toast
      const toastId = toast.loading("Signing in...");
  
      const response = await singIn({
        variables: { password, [input]: emailOrUsername }
      });
      if (response?.data) {
        // Update loading toast to success
        localStorage.setItem('_u', encodeData(response.data.tokenAuth.user));
        const tokenData = {
          token: response.data.tokenAuth.token,
          refreshToken: response.data.tokenAuth.refreshToken,
          expiresIn: response.data.tokenAuth.refreshExpiresIn
        };
        localStorage.setItem('_t', encodeData(tokenData));

        toast.update(toastId, {
          render: "Successfully logged in!",
          type: "success",
          isLoading: false,
          autoClose: 2000
        });
        router.push('/'); // or your desired redirect path
      }
  
    } catch (err:any) {
      toast.error(err.message || 'Something went wrong!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }

  return (
    <div className={style['wrapper']}>
      <div className={style['title']}>
        Welcome Back
      </div>
      <div className={style['btn-switch']}>
        <Button active label={"Sign In"} onClick={() => router.push("/auth/signin")} /> <Button label={"Signup"} onClick={() => router.push("/auth/signup")} />
      </div>
      <div className="flex flex-col gap-5 text-ms_white">
        <StyledTextField label="Email or Username" variant="outlined" value={emailOrUsername} onChange={(e :any) => setEmailOrUsername(e.target.value)}/>
        <StyledTextField label="Password" variant="outlined" type="password" value={password} onChange={(e :any) => setPassword(e.target.value)}/>
      </div>
      <Link href={"/auth/forget-password"} className=" text-left text-xs font-bold cursor-pointer w-full justify-end flex">
        Forget Password?
      </Link>
      <div className={style["final-btn"]}
        onClick={handleSignIn}>
        <div className={style["btn-text"]}>
          sign in
        </div>
      </div>

      
    </div>
  );
};

export default SignInPage;
