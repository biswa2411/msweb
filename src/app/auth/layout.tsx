import WaveBg from "@components/svg/WaveBg";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="bg-gradient-to-r from-amber-200 to-yellow-500  min-h-screen flex justify-center px-16 items-center relative ">

        <div className="absolute top-1/3 right-1/2 size-80 bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
        <div className="absolute top-1/3 left-1/2 size-80 bg-violet-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
        <div className="absolute top-1/2 left-[42%] size-80 bg-sky-950 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
     

     <div className="w-full  justify-center items-center flex">
     <div className="flex bg-primary z-10 bg-opacity-20 backdrop-blur-lg  space-x-4 flex-col w-fit p-10 justify-center items-center gap-5 shadow-custom rounded-[40px] ">
        <img
          className="w-[175px] h-[175px]  left-[calc(50%_-_446px)] top-[calc(50%_-_363px)] shadow-custom rounded-full"
          style={{ objectFit: "cover" }}
          src="/logo.svg"
        />  

        {children}

      </div>
     </div>

    {/* <WaveBg className="w-full  absolute left-0 bottom-0"/> */}

    </div>
  );
}
