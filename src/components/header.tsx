"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLinkedin, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  const router = useRouter();

  return (
    <header className="p-[1rem] flex xl:justify-between justify-center xl:flex-row flex-col items-center xl:mx-[5rem]">
      <div
        onClick={() => router.push("/")}
        className="z-10 cursor-pointer xl:text-5xl text-3xl select-none"
      >
        <span className="font-bold">{"<"}Adrian</span>
        <span className="font-thin">Vinícius{"/>"}</span>
      </div>
      <nav className="flex flex-wrap gap-[1rem] z-10 mt-[1rem] ">
        <div className="hover:text-accent transition-all duration-300">
          <FaWhatsappSquare
            size={"2rem"}
            onClick={() =>
              router.push(
                "https://api.whatsapp.com/send/?phone=5598981410935&text&type=phone_number&app_absent=0"
              )
            }
          />
        </div>
        <div className="hover:text-accent transition-all duration-300">
          <FaLinkedin
            size={"2rem"}
            onClick={() =>
              router.push("https://www.linkedin.com/in/adrian-vinicius/")
            }
          />
        </div>
        <div className="hover:text-accent transition-all duration-300">
          <FaGithubSquare
            size={"2rem"}
            onClick={() => router.push("https://github.com/adrian0-0")}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
