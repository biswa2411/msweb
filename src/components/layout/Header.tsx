"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
// import IconButton from "@lib/button/IconButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import IconButton from "@components/lib/buttons/IconButton";
import { useState } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname()
  const user = "biswajit-routray";
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Tutorials", path: "/tutorials" },
    { title: "About", path: "/about" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <div className="w-[25vw] bg-primary h-full text-white " role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex w-full justify-center my-5">
        <button className=" relative cursor-pointer shadow-custom rounded-full mt-2 " onClick={() => router.push("/")}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={60}
            width={60}
            objectFit="contain"
          />
        </button>
      </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "gray" }} />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className="w-full mx-auto  bg-primary text-ms_white px-20 flex justify-between items-center py-4 fixed top-0 z-30">
      <button className="flex cursor-pointer lg:hidden" onClick={toggleDrawer(true)} >
        <MenuIcon />
      </button>
      <button className=" relative cursor-pointer shadow-custom rounded-full" onClick={() => router.push("/")}>
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={60}
          width={60}
          objectFit="contain"
        />
      </button>
      <div className="hidden lg:flex gap-10 bg-primary_lite  px-10 rounded-full shadow-custom ">
        {menuItems.map(({ title, path }, index) => {
       const isActive = (path === "/" && pathname === "/") || (path !== "/" && pathname.startsWith(path));
          return (
            <button
              key={index}
              onClick={() => router.push(path)}
              className="group relative h-10 inline-block overflow-hidden rounded  w-24  text-sm font-medium   "
            >
              {title}
              <span className={`ease absolute left-0 top-0 h-0 w-0 border-t-2 border-ms_white transition-all duration-200 ${isActive ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              <span className={`ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-ms_white transition-all duration-200 ${isActive ? 'w-full' : 'group-hover:w-full'
                }`}></span>
            </button>
          )
        })}
      </div>
      <div className="hidden lg:flex gap-5">
        <IconButton icon={Search}  onClick={() => {
            router.push(`/${user}`);
          }} />
        <IconButton icon={ShoppingCart} onClick={() => router.push("/cart")} />
        <IconButton
          icon={Person}
          onClick={() => {
            router.push(`/auth/signin`);
          }}
        />
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </nav>
  );
};
