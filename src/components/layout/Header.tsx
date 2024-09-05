"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Person, Search, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import IconButton from "@components/lib/buttons/IconButton";
import { useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import SendIcon from '@mui/icons-material/Send';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
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
    <div
      className="w-[100%] bg-primary h-full text-white "
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="relative " onClick={toggleDrawer(false)}>
        <Image
          src={"/crossIcon.svg"}
          alt="logo"
          height={20}
          width={20}
          objectFit="contain"
          className="absolute top-1 right-1 cursor-pointer"
        />
      </div>
      <div className="flex w-full justify-center my-5">
        <button
          className=" relative cursor-pointer shadow-custom rounded-full mt-2 "
          onClick={() => router.push("/")}
        >
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
        {[
          { text: "Inbox", icon: <InboxIcon className="text-white" /> },
          { text: "Starred", icon: <StarBorderIcon className="text-white" /> },
          { text: "Send email", icon: <SendIcon className="text-white" /> },
          { text: "Drafts", icon: <DraftsIcon className="text-white" /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "gray" }} />
      <List>
        {[
          { text: "All mail", icon: <AllInboxIcon className="text-white" /> },
          { text: "Trash", icon: <DeleteIcon className="text-white" /> },
          { text: "Spam", icon: <ReportIcon className="text-white" /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className="w-full mx-auto  bg-primary text-ms_white px-10 md:px-20 flex justify-between items-center py-4 fixed top-0 z-30">
      <button
        className="flex cursor-pointer lg:hidden"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </button>
      <button
        className=" relative cursor-pointer shadow-custom rounded-full"
        onClick={() => router.push("/")}
      >
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
          const isActive =
            (path === "/" && pathname === "/") ||
            (path !== "/" && pathname.startsWith(path));
          return (
            <button
              key={index}
              onClick={() => router.push(path)}
              className="group relative h-10 inline-block overflow-hidden rounded  w-24  text-sm font-medium   "
            >
              {title}
              <span
                className={`ease absolute left-0 top-0 h-0 w-0 border-t-2 border-ms_white transition-all duration-200 ${
                  isActive ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
              <span
                className={`ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-ms_white transition-all duration-200 ${
                  isActive ? "w-full" : "group-hover:w-full"
                }`}
              ></span>
            </button>
          );
        })}
      </div>
      <div className="hidden lg:flex gap-5">
        <IconButton
          icon={Search}
          onClick={() => {
            router.push(`/${user}`);
          }}
        />
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
