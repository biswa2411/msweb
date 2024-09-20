import Image from 'next/image';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-amber-100 via-lime-200 to-green-200 min-h-screen flex justify-center px-16 items-center relative">
      {/* Preloading background images */}
      <link rel="preload" href="/productInfo/img1.svg" as="image" />
      <link rel="preload" href="/productInfo/img2.svg" as="image" />
      <link rel="preload" href="/productInfo/img3.svg" as="image" />
      <link rel="preload" href="/productInfo/img4.svg" as="image" />
      <link rel="preload" href="/productInfo/img5.svg" as="image" />

      {/* Background SVGs */}
      <div className="absolute grid grid-cols-4 bg items-center h-screen w-screen pl-20">
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
            className={`size-80 bg-no-repeat bg-center bg-cover mix-blend-multiply filter blur-md opacity-70 animate-blob ${
              idx % 2 === 0 ? 'animation-delay-2000' : 'animation-delay-4000'
            }`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full justify-center items-center flex">
        <div className="flex bg-primary z-10 bg-opacity-20 backdrop-blur-lg space-x-4 flex-col w-fit p-10 justify-center items-center gap-5 shadow-custom rounded-[40px]">
          <Image
            width={150}
            height={150}
            className="shadow-custom rounded-full"
            style={{ objectFit: 'cover' }}
            src="/logo.svg"
            alt="Logo"
            priority
          />
          {children}
        </div>
      </div>
    </div>
  );
}
