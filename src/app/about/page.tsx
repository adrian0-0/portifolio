"use client";
import React, { useState } from "react";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import FooterVector from "@/components/footerVector";
import { finished } from "stream";
import { menu } from "framer-motion/client";
import {
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const [isIndex, setIndex] = useState(0);

  const aboutData = [
    {
      title: "Certificações",
      info: [
        {
          title: "Graduação: UNDB - Engenharia de Software",
          stage: "Janeiro de 2025 - Concluído",
        },
        {
          title: "AWS Certified Cloud Practitioner",
          stage: "Outubro de 2024 - Concluído",
        },
        {
          title: "Curso de Inglês Avançado Yázigi",
          stage: "Junho de 2023 - Concluído",
        },
      ],
    },
    {
      title: "SoftSkills",
      info: [
        { title: "Flexível" },
        { title: "Organizado" },
        { title: "Team work" },
      ],
    },
    {
      title: "Tecnologias",
      info: [
        {
          title: "Frontend",
          icons: [
            SiReact,
            SiNextdotjs,
            SiTypescript,
            SiHtml5,
            SiJavascript,
            SiTailwindcss,
          ],
        },
        {
          title: "Backend",
          icons: [
            SiNestjs,
            SiDocker,
            SiPostgresql,
            SiMysql,
            SiSwagger,
            SiPrisma,
          ],
        },
      ],
    },
  ];

  return (
    <section className="flex justify-center xl:container xl:h-screen items-center xl:px-[6rem] xl:pb-[10rem]">
      <div className="flex xl:mt-[0rem] mt-[2rem] md:w-2/3 xl:w-full flex-col xl:flex-row flex-nowrap gap-[2rem]  xl:justify-between xl:items-start">
        <div className="container flex px-[1rem] flex-wrap gap-[2rem]">
          <motion.h2
            className="xl:text-5xl text-2xl font-medium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
          >
            <span className="text-accent">Transformando código em {""}</span>
            Soluções
          </motion.h2>{" "}
          <motion.p
            className="text-justify"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
          >
            Eu sou um desenvolvedor de software e entusiasta de tecnologia, já
            trabalhei em projetos reais contribuindo ativamente no
            desenvolvimento de soluções de software como landing pages,
            gerenciador de estoque e plataforma de agendamento de reuniões
          </motion.p>
        </div>
        <motion.div
          className="container flex flex-col w-full xl:max-w-[48%] xl:w-full gap-x-[0.5rem]"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
        >
          {/* MENU */}
          <div className="flex  justify-center gap-x-[1rem] xl:gap-[2rem]  xl:mx-[0rem] mb-[1rem] select-none items-end  bg-white/10 backdrop-blur-sm rounded-2xl py-[1rem] pt-[0.25rem]">
            {aboutData.map((item, index) => (
              <div
                key={index}
                onClick={() => setIndex(index)}
                className={`
            cursos-pointer capitalize xl:text-lg relative cursor-pointer
            after:absolute after:h-[2px] after:mt-[0.25rem] after:left-0
            after:bg-red-500 after:transition-all after:duration-700
            ${
              isIndex === index
                ? "text-accent after:w-full after:bg-accent"
                : "after:w-8"
            }
          `}
              >
                <div>{item.title}</div>
              </div>
            ))}
          </div>
          {/* CONTEÚDO DA ABA SELECIONADA */}
          <div className="relative w-full">
            {aboutData.map((submenu, submenuIndex) => (
              <div
                key={`submenu-${submenuIndex}`}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out
            ${
              isIndex === submenuIndex
                ? "opacity-100 "
                : "opacity-0 pointer-events-none"
            }
          `}
              >
                <div className="flex flex-row flex-wrap py-[0.5rem] md:py-[1rem] xl:py-[1.5rem] gap-y-[0.5rem] xl:gap-y-[1rem] items-start lg:items-start text-white">
                  {submenu.info.map((item, indexInfo) => (
                    <div
                      key={`info-${indexInfo}`}
                      className="w-full mb-[0.5rem]"
                    >
                      {item.title && (
                        <strong className="mb-[1rem]">{item.title}</strong>
                      )}
                      {"stage" in item && <div>{item.stage}</div>}
                      <div className="flex gap-[1rem] w-full">
                        {"icons" in item &&
                          item.icons.map((Icon, iconIndex) => (
                            <Icon key={`icon-${iconIndex}`} size={"1.5rem"} />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <FooterVector></FooterVector>
    </section>
  );
};

export default About;
