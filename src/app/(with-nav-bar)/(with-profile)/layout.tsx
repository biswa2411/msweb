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
    { icon: "/profileIcon.svg", link: "/user", Title: "Profile" },
    { icon: "/ordersIcon.svg", link: "/order", Title: "Orders" },
    { icon: "/helpIcon.svg", link: "/support", Title: "Help & Support" },
    { icon: "/faq.svg", link: "/faq", Title: "FAQs" },
    { icon: "/signOutIcon.svg", link: "#", Title: "Log Out" },
  ];

  return (
    <section className="relative flex flex-row p-2 md:p-5 gap-2 ">

      <div className=" sticky top-24 flex flex-col gap-5 justify-center items-center h-fit bg-white w-1/6 md:shadow-custom rounded-xl overflow-auto">
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
        </div>
        <div className="text-primary text-center font-bold text-[16px] md:text-[24px]">
          John Perry
        </div>
        <ul className="flex flex-col gap-5">
          {profileSidebar.map(({ link, icon, Title }, key) => (
            <li
              key={key}
              className={`px-2 pb-3 hover:border-l-4 border-primary ${router === link ? "text-primary border-l-4" : "text-gray-300"
                }`}
            >
              <Link
                href={link}
                className="hover:text-primary font-semibold flex gap-3 "
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
      <div className="w-full h-full ">{children} </div>
    </section>
  );
}
