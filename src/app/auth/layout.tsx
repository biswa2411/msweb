

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="bg-primary w-full h-screen flex justify-between px-20 items-center">
     <div className="w-full  justify-center items-center flex">
     <div className="flex bg-primary flex-col w-fit p-10 justify-center items-center gap-5 shadow-custom rounded-[40px] ">
        <img
          className="w-[175px] h-[175px]  left-[calc(50%_-_446px)] top-[calc(50%_-_363px)] shadow-custom rounded-full"
          style={{ objectFit: "cover" }}
          src="/logo.svg"
        />  

        {children}

      </div>
     </div>

      <img
        className="rounded-[32px] w-[656px] h-[904px]  left-[724px] top-[60px]"
        style={{ objectFit: "cover" }}
        src={'/auth/auth1.jpg'}
      />


    </div>
  );
}
