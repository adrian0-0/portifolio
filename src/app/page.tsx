"use client";

import { BgParticles } from "@/components/bgParticles";
import ProjectButton from "@/components/projectButton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full mt-[1rem] sm:mt-[0rem]">
      <div className="flex xl:justify-between justify-center items-start md:mt-[0rem]  md:items-center text-center xl:text-left w-full h-full mx-auto container px-[5rem]">
        <div className="flex items-center xl:items-start flex-col flex-wrap gap-[1rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h1 className="xl:text-5xl text-2xl font-medium">
              <span className="text-accent">Desenvolvedor</span> FullStack
            </h1>
          </motion.div>
          <p className="xl:text-xl ">
            Projeto e desenvolvo soluções inovadoras de software
          </p>
          <button
            onClick={() => window.open("/cv/CV.pdf")}
            className="bg-gradient-to-r from-slate-950 to-gray-800 font-semibold text-white rounded-lg py-2 px-4 duration-300 hover:translate-y-[-2px] w-[200px] hover:shadow-2xl z-10"
          >
            Baixar CV
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
