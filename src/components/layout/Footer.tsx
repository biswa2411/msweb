"use client";

import Image from "next/image";
import { useState } from "react";

export const Footer = (): JSX.Element => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact us", link: "/contact-us" },
    { name: "Find us at Google Maps", link: "/#" },
  ];

  const help = [
    { name: "Payment Policy", link: "/payment-policy" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
    {
      name: "Cancellation, Refund and Returns Policy",
      link: "/refund-return-policy",
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      link: "/",
      img: "/footer/facebook.svg",
      alt: "facebook",
    },
    {
      name: "Instagram",
      link: "/",
      img: "/footer/instagram.svg",
      alt: "instagram",
    },
    { name: "Twitter", link: "/", img: "/footer/twitter.svg", alt: "twitter" },
  ];

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("email----->", email);
    setEmail("");
  };

  return (
    <div className="bg-[#0E2920] py-[4%] px-[10%]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="">
          {/* Logo */}
          <Image
            className="py-2"
            height={100}
            width={100}
            alt="logo"
            objectFit="cover"
            src="/logo.svg"
          />
          <p className="font-semibold text-[14px] pr-2 text-[#FFCF8F] py-2">{`Plot No.99/507, Chinmayee Nivas, Road No.12,Mahaveer Nagar, Samantrapur,Bhubaneswar, Odisha, 751002`}</p>
          {/* Social Media */}
          <div className="flex gap-2">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="flex justify-center items-center"
                  height={25}
                  width={25}
                  alt={item.alt}
                  objectFit="cover"
                  src={item.img}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-bold text-[#B88E2F] text-[24px]">Links</p>
          <div className="flex flex-col font-semibold text-[14px] text-[#FFCF8F] gap-2">
            {links.map((item, index) => (
              <a key={index} href={item.link}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-[#B88E2F] text-[24px]">Help</h3>
          <div className="flex flex-col font-semibold text-[14px] text-[#FFCF8F] gap-2">
            {help.map((item, index) => (
              <a key={index} href={item.link}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <h3 className="font-bold text-[#B88E2F] text-[24px]">NewsLetter</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start"
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
              required
              className="bg-[#1E342C] text-white rounded-2xl px-2 py-1 my-2"
            />
            <button
              type="submit"
              className="text-white border border-white rounded-2xl px-2 py-1 my-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center pt-4 text-[#FFFFFF] font-medium ">copyright ©2024 MsArtLife </div>
    </div>
  );
};
