'use client'
import { Close } from '@mui/icons-material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {

  const router =useRouter()
  const path = usePathname()
  return (

    <div className="bg-gradient-to-r from-amber-100 via-lime-200 to-green-200 h-screen w-screen flex justify-center md:px-16 items-center md:relative">
   

      <div className="absolute sm:flex flex-wrap  bg items-center justify-center h-screen w-screen overflow-hidden hidden">
        {[
          '/productInfo/img1.svg',
          '/productInfo/img2.svg',
          '/productInfo/img3.svg',
          '/productInfo/img4.svg',
          '/productInfo/img5.svg',
          '/productInfo/img1.svg',
          '/productInfo/img1.svg',
          '/productInfo/img3.svg',
        ].map((url, idx) => (
          <div
            key={idx}
            className={`size-80 relative  mix-blend-multiply filter blur-md opacity-70 animate-blob ${idx % 2 === 0 ? 'animation-delay-2000' : 'animation-delay-4000'
              }`}
          >
             <Image src={url} alt={'bg-img'} fill priority />
          </div>
        ))}
      </div>

      <div className=" relative flex h-full sm:h-fit bg-primary  z-10 bg-opacity-20 backdrop-blur-lg sm:space-x-4 flex-col w-full sm:w-fit p-1 sm:p-10 justify-center items-center gap-5 shadow-custom sm:rounded-[40px]">
      {!(/(signin|signup)/.test(path) )&&  <button onClick={()=>router.back()} className='absolute top-4 left-4 size-10 rounded-full shadow-custom'>
          <Close fontSize='medium'/>
        </button>}
        <Image
          width={100}
          height={100}
          className="shadow-custom rounded-full"
          style={{ objectFit: 'cover' }}
          src="/logo.svg"
          alt="Logo"
          priority
        />
        {children}
      </div> </div>
  );
}
