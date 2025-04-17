"use client";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navBar";
import Header from "@/components/header";
import TopLeftImg from "@/components/topLeftImg";
import { AnimatePresence, motion } from "framer-motion";
import Transiction from "@/components/transiction";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  const excludedPaths = [""];
  const isExcluded = excludedPaths.includes(currentPath);

  return !isExcluded ? (
    <>
      <Transiction>
        <TopLeftImg></TopLeftImg>
        <Header></Header>
        <NavBar></NavBar>
        {children}
      </Transiction>
    </>
  ) : (
    children
  );
};

export default Provider;
