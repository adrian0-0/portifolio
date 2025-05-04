"use client";

import { BgParticles } from "@/components/bgParticles";
import ProjectButton from "@/components/projectButton";
import TextAnimation from "@/components/textAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <section className="h-full mt-[2rem] sm:mt-[0rem]">
      <div className="flex xl:justify-between justify-center items-start md:mt-[0rem]  md:items-center text-center xl:text-left w-full h-full mx-auto container px-[5rem]">
        <div className="flex items-center xl:items-start flex-col flex-wrap gap-[1rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="xl:w-[670px] md:w-[500px]  w-[350px]"
          >
            <TextAnimation></TextAnimation>
          </motion.div>
          <p className="xl:text-xl ">
            Projeto e desenvolvo soluções inovadoras de software
          </p>

          <button
            onClick={() => window.open("/cv/CV.pdf")}
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex 
                      items-center justify-center overflow-hidden hover:border-accent group z-10"
          >
            <BsArrowRight
              className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
                        group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
            ></BsArrowRight>
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Baixar CV
            </span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
          >
            <ProjectButton />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="relative hidden xl:block w-full h-full max-w-[1000px] z-10"
        >
          <Image
            src="/devices-view.png"
            alt="Telas de apresentação do projeto gerenciador de estoque"
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
            priority
          ></Image>
        </motion.div>
      </div>
      <BgParticles />
    </section>
  );
}
