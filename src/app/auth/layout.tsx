import Image from "next/image";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="bg-primary w-full h-screen flex justify-between px-20 items-center">
      <div className="flex flex-col w-full justify-center items-center gap-5 ">
        <img
          className="w-[175px] h-[175px]  left-[calc(50%_-_446px)] top-[calc(50%_-_363px)]"
          style={{ objectFit: "cover" }}
          src="/logo.svg"
        />

        {/* <Image src={'logo.svg'} alt="logo" width={175} height={175}/> */}
       
          {children}
    
      </div>

      <img
        className="rounded-[32px] w-[656px] h-[904px]  left-[724px] top-[60px]"
        style={{ objectFit: "cover" }}
        src={'/auth/auth1.jpg'}
      />


    </div>
  );
}
