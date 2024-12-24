"use client"
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"

const ForgetPassword = ({
  className,
  ...props
}: any): JSX.Element => {

  const router = useRouter()


  return (

    <div className={style['wrapper']}>
      {" "}
      <div className={style['title']}>
        Trouble logging in?{" "}
      </div>

      <p className="w-full text-primary text-wrap text-center font-semibold">{`Enter your email, phone, or username and we'll send you a link to get back into your account.`}
      </p>
      <div className="w-full flex flex-col gap-5 text-ms_white">
        <StyledTextField label="Email address or Phone No." variant="outlined" />
      </div>

      <div className={style["final-btn"]} onClick={() => router.push("/auth/verify-otp")}>
        <div className={style["btn-text"]}>
          Send Otp{" "}
        </div>
      </div>


    </div>
  );
};

export default ForgetPassword;
