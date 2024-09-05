"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuId = "primary-search-account-menu";
  const router = usePathname();

  const profileSidebar = [
    { icon: "/profileIcon.svg", link: "/profile", Title: "Profile" },
    { icon: "/ordersIcon.svg", link: "/order", Title: "Orders" },
    { icon: "/helpIcon.svg", link: "/support", Title: "Help & Support" },
    { icon: "/signOutIcon.svg", link: "#", Title: "Log Out" },
  ];

  return (
    <section className="'h- w- flex flex-row">
      <div className=" md:w-[350px] flex items-start justify-center bg-slate-400">
        <div className=" flex flex-col gap-5 justify-center items-center py-[10%] bg-white w-4/5 m-2 md:m-5  shadow-custom rounded-xl">
          <div className="relative">
            <Image
              src={
                "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph"
              }
              alt="profile image"
              height={150}
              width={150}
              className="rounded-full shadow-lg"
            />
            <button className="absolute -bottom-2 -right-2 hover:shadow-sm">
              <Image
                src="/cameraIcon.svg"
                alt="profile image"
                height={35}
                width={35}
                className="rounded-full"
              />
            </button>
          </div>
          <div className="text-primary text-center font-bold text-[16px] md:text-[24px]">
            John Perry
          </div>
          <ul className="w-[70px] md:w-full">
            {profileSidebar.map(({ link, icon, Title }, key) => (
              <li
                key={key}
                className={`mb-5 w-full px-5 py-2 hover:border-l-4 border-primary ${
                  router === link ? "text-primary border-l-4" : "text-gray-300"
                }`}
              >
                <Link
                  href={link}
                  className="hover:text-primary font-semibold text-[20px] flex gap-3 "
                >
                  <Image
                    src={icon}
                    alt="profile image"
                    height={30}
                    width={30}
                    className="flex justify-center items-center"
                  />
                  <span className="hidden md:inline text-[16px]">{Title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full">{children} </div>
    </section>
  );
}
