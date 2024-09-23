"use client"
import StyledTextField from '@components/lib/inputs/StyledTextField';
import { useRouter } from 'next/navigation';
import React from 'react'
import style from '../Auth.module.css'

const Resetpage = () => {
  const router = useRouter()

  return (
    <div className={style['wrapper']}>
      {" "}
      <div className={style['title']}>
        Reset Password{" "}
      </div>


      <div className="w-full flex flex-col gap-5 text-ms_white">

        <StyledTextField label="Enter New Password" variant="outlined" />
        <StyledTextField label="Confirm Password" variant="outlined" />

      </div>



      <div className={style["final-btn"]}
        onClick={() => router.push("/")}>
        <div className={style["btn-text"]}>
        Change Password{" "}
        </div>
      </div>


    </div>
  );
};

export default Resetpage