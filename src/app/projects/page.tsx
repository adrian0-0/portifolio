"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { projectsData } from "@/configs/projectsData";
import { fadeIn } from "@/configs/fadeIn";
import Image from "next/image";

const Projects = () => {
  return (
    <div className=" md:pb-[0rem] pb-[8rem] md:h-full h-auto mt-[2rem]">
      <div className="flex flex-col justify-center items-center xl:h-[90%] md:h-[75%] xl:mt-0 ">
        <motion.h2
          className="xl:text-5xl md:text-4xl text-3xl font-medium md:mb-[1rem] select-none"
          variants={fadeIn}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, delay: 1 }}
        >
          Meus <span className="text-accent">projetos.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, delay: 1 }}
        >
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1850: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            pagination={true}
            modules={[Pagination]}
            className="container max-w-[350px] md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1400px] mt-[1rem] "
          >
            {projectsData.map((value, index) => (
              <SwiperSlide
                key={index}
                className="bg-neutral-900/80 rounded-xl cursor-pointer "
              >
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-[250px] object-cover"
                    width={800}
                    height={400}
                    src={value.img}
                    alt={value.alt}
                  />
                </a>
                <div className="p-5">
                  <a href={value.path}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {value.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {value.description}
                  </p>
                  <a
                    href={value.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                          items-center justify-center overflow-hidden hover:border-accent group mb-[2rem] md:mb-[0rem] ${
                            value.path === "false" ? "hidden" : "inherit"
                          }`}
                    >
                      <BsArrowRight
                        className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                      ></BsArrowRight>
                      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                        Acesse aqui
                      </span>
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
