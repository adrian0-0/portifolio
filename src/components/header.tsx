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
      <nav className="flex flex-wrap gap-[1rem] z-10 mt-[1rem]">
        <a
          href="https://wa.me/5598987886697"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <FaWhatsappSquare size="2rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-vinicius/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <FaLinkedin size="2rem" />
        </a>
        <a
          href="https://github.com/adrian0-0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-all duration-300"
        >
          <FaGithubSquare size="2rem" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
