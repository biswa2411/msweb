"use client"
import {  useRouter } from "next/navigation";


export default function Home() {

  const router =useRouter()

  return (
    <section className="h-screen w-screen">
      <div onClick={()=>router.push("/about")} className="shadow-custom h-10 p-10 m-10 mt-96 w-max">Click on me</div>
    </section>
  );  
}
