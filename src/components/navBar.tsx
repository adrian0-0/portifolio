"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { MdHome, MdPerson, MdPhone, MdTerminal, MdWork } from "react-icons/md";

interface INavData {
  name: string;
  path: string;
  icon: IconType;
}

const navData: INavData[] = [
  {
    name: "Home",
    path: "/",
    icon: MdHome,
  },
  {
    name: "Sobre mim",
    path: "/about",
    icon: MdPerson,
  },
  {
    name: "Contato",
    path: "/contact",
    icon: MdPhone,
  },
  {
    name: "Projetos",
    path: "/projects",
    icon: MdWork,
  },
];

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <nav
      className="flex flex-col items center md:justify-center gap-y-[1rem] fixed h-max bottom-0 mt-auto md:right-[2%]
      z-50 top-0 w-full md:w-16 md:max-w-md md:h-screen"
    >
      <div
        className="flex md:flex-col justify-between md:justify-center items-center flex-wrap gap-y-[3rem] px-[1rem] py-[1.5rem] 
        md:h-max bg-white/10 backdrop-blur-sm text-3xl md:text-xl md:rounded-full"
      >
        {Array.isArray(navData) &&
          navData.map((navData) => (
            <div
              onClick={() => router.push(navData.path)}
              key={navData.name}
              className={`${
                navData.path === pathName && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              <div className="absolute pr-[3rem] right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[0.5rem] rounded-[0.25rem]">
                  <div className="w-max text-[0.75rem] leading-none font-semibold">
                    {navData.name}
                  </div>
                  <div className="border-solid border-l-white border-l-[0.5rem] border-y-transparent border-y-[0.25rem] border-r-0 absolute -right-[0.25rem]"></div>
                </div>
              </div>
              <navData.icon size={"20px"}></navData.icon>
            </div>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
