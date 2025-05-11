"use client";

import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";
import groovyWalkAnimation from "@/animation/groovyWalk.json";
import React from "react";
import Header from "./header";
import NavBar from "./navBar";

interface ITransition {
  children: React.ReactNode;
  currentPath: string;
}

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transiction = ({ children, currentPath }: ITransition) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={currentPath}>
          <motion.div
            initial={{ x: "-100%", y: "-100%", rotate: -45 }}
            animate={{ x: "100vw", y: "100vh" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="
    fixed top-0 left-0
    w-[250vw] h-[40vh]          
    md:w-[200vw] md:h-[70vh]     
    xl:w-[140vw] lg:h-[140vh]    
    z-50  bg-red-700/70
  "
          />
          <motion.div
            initial={{ x: "100%", y: "100%", rotate: -45 }}
            animate={{ x: "-100vw", y: "-100vh" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="
    fixed bottom-0 right-0
    w-[250vw] h-[40vh]          
    md:w-[200vw] md:h-[70vh]     
    xl:w-[140vw] lg:h-[140vh]    
    z-50  bg-red-900/70
  "
          />
        </motion.div>
      </AnimatePresence>
      <Header></Header>
      <NavBar></NavBar>
      {children}
    </>
  );
};

export default Transiction;
