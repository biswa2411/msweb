import { redirect } from "next/navigation";


export default function Home() {

  return (
    <section className="h-screen w-screen">
      <div onClick={()=>redirect("/about")} className="shadow-custom h-10 p-10 m-10 mt-96">Click on me</div>
    </section>
  );  
}
