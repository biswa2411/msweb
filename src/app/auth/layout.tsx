import WaveBg from "@components/svg/WaveBg";

import BG1 from "../../../public/productInfo/img1.svg"


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="bg-gradient-to-r from-amber-100 via-lime-200 to-green-200 min-h-screen flex justify-center px-16 items-center relative ">
      <div className="absolute grid grid-cols-4 bg items-center h-screen w-screen pl-20">
        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img1.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2000" />
        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img2.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-4000" />
        <div className="  size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img3.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob " />
        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img4.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2000" />

        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img5.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-4000" />
        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img1.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-" />
        <div className=" size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img1.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2000" />
        <div className="  size-80 bg-no-repeat bg-center bg-cover  bg-[url('/productInfo/img3.svg')]  mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-4000" />

      </div>

      <div className="w-full  justify-center items-center flex">
        <div className="flex bg-primary z-10 bg-opacity-20 backdrop-blur-lg  space-x-4 flex-col w-fit p-10 justify-center items-center gap-5 shadow-custom rounded-[40px] ">
          <img
            className="size-[150px]  left-[calc(50%_-_446px)] top-[calc(50%_-_363px)] shadow-custom rounded-full"
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
