'use client'
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, ContactPage, Home, InfoRounded, Login, Person, Search, Shop, ShoppingCart } from "@mui/icons-material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import IconButton from "@components/lib/buttons/IconButton";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { motion } from "framer-motion";
import SearchBar from "@components/lib/inputs/Searchbar";

export const Header = () => {

  const router = useRouter();

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [searchClicked, setSearchClicked] = useState(false)
  const [search, setSearch] = useState('')
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    // { title: "Tutorials", path: "/tutorials" },
    { title: "About", path: "/about" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    if (window.innerWidth < 1150) {
      let lastScrollTop = 0;
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div
      className=" bg-primary h-full text-white"
      role="presentation"
      onClick={toggleDrawer(false)}
    >

      <div className="flex w-full justify-center py-5 px-2 relative">
        <button
          className="relative cursor-pointer shadow-custom rounded-full mt-2"
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
        <div className="absolute right-2 top-2">
          <IconButton icon={ChevronLeftIcon} onClick={() => setOpen(false)} />
        </div>

      </div>
      <List className="flex flex-col pl-10 pr-14 gap-1 ">
        {[
          { text: "Home", icon: <Home className="text-white" />, path: '/' },
          { text: "Shop", icon: <Shop className="text-white" />, path: '/shop' },
          { text: "About", icon: <InfoRounded className="text-white" />, path: "/about" },
          { text: "Contact Us", icon: <ContactPage className="text-white" />, path: '/contact-us' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => router.push(item?.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "gray", my: 2 }} />
      <List className="flex flex-col pl-10 pr-14 gap-1 ">
        {[

          { text: "Cart", icon: <ShoppingCart className="text-white" />, path: "/cart" },
          { text: "User", icon: <AccountCircle className="text-white" />, path: "/user" },
          { text: "Login", icon: <Login className="text-white" />, path: "/auth/signin" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => router.push(item?.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav
      className={`w-full flex justify-between lg:grid lg:grid-cols-3   mx-auto bg-primary text-ms_white px-10 md:px-20  items-center py-4 fixed top-0 z-30 transition-transform duration-300  ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <button
        className="flex cursor-pointer lg:hidden"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </button>
      <button
        className="relative cursor-pointer shadow-custom rounded-full w-fit"
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
      <div className="hidden lg:flex gap-10 bg-primary_lite px-10 rounded-full shadow-custom">
        {menuItems.map(({ title, path }, index) => {
          const isActive =
            (path === "/" && pathname === "/") ||
            (path !== "/" && pathname.startsWith(path));
          return (
            <button
              key={index}
              onClick={() => router.push(path)}
              className="group relative h-10 inline-block overflow-hidden rounded w-24  font-medium"
            >
              <p className="text-[10px]">{title}</p>
              <span
                className={`ease absolute left-0 top-0 h-0 w-0 border-t-2 border-ms_white transition-all duration-200 ${isActive ? "w-full" : "group-hover:w-full"
                  }`}
              ></span>
              <span
                className={`ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-ms_white transition-all duration-200 ${isActive ? "w-full" : "group-hover:w-full"
                  }`}
              ></span>
            </button>
          );
        })}
      </div>
      <div className="hidden lg:flex gap-5  justify-end">

        <SearchBar/>
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

