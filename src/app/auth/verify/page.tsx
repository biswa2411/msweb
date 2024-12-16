"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "../Auth.module.css"
import { useMutation } from "@apollo/client";
import { VERIFY_ACCOUNT } from "@services/graphql/mutations/auth";
import { Spinner } from "@nextui-org/react";

const VerifyAccount = ({
  className,
  ...props
}: any): JSX.Element => {
  // const [otp, setOtp] = useState<string>("")
  const searchParams = useSearchParams()

  const token = searchParams.get('t')
  const [verifyAccount, { data, loading, error }] = useMutation(VERIFY_ACCOUNT, {
    variables: {
      token
    },
    onCompleted: (data: any) => {
      console.log(data)
    }
  })



  useEffect(() => {
    token?.length && verifyAccount();
  }, [token, verifyAccount]);

  const router = useRouter()
  return (

    <div className={style['wrapper']}>
      {" "}
      <div className="text-ms_white text-center font-['InstagramSans-Bold',_sans-serif] text-[32px] font-bold  left-[calc(50%_-_462px)] top-[340px]">
        {loading ? "Please wait, we are verifying your account ..." : "Verification successful"}
      </div>



      <div className="w-full flex flex-col justify-center items-center gap-5 text-ms_white">

        {/* <OTP separator={<span>{" "}</span>} value={otp} onChange={setOtp} length={6} /> */}

        {loading ? <div className="size-10 flex justify-center items-center  border-4 border-secondary border-r-transparent rounded-full animate-spin"/>: <p className="w-full text-primary text-wrap text-center font-semibold">{data?.verifyAccount?.message}</p>}


      </div>


      {!loading ? <div className={style["final-btn"]} onClick={() => router.push("/auth/signin")}>
        <div className={style["btn-text"]}>
          Go to login page
        </div>
      </div> : null}


    </div>
  );
};


export default VerifyAccount