"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { projectsData } from "@/configs/projectsData";
import { fadeIn } from "@/configs/fadeIn";
import Image from "next/image";

const Projects = () => {
  return (
    <div className=" md:pb-[0rem] pb-[8rem] md:h-full h-auto mt-[2rem]">
      <div className="flex flex-col justify-center items-center xl:h-[90%] md:h-[75%] xl:mt-0">
        <motion.h2
          className="xl:text-5xl md:text-4xl text-3xl font-medium md:mb-[1rem] select-none"
          variants={fadeIn}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, delay: 1 }}
        >
          Trabalhos <span className="text-accent">realizados.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.2, delay: 1 }}
        >
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 50,
              modifier: 4,
              slideShadows: false,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            loop={true}
            speed={1000}
            pagination={{
              type: "bullets",
            }}
            navigation={true}
            modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
            className="swiper_wrap container max-w-[350px] md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1000px] mt-[1rem]"
          >
            {projectsData.map((value, index) => (
              <SwiperSlide
                key={index}
                className="bg-neutral-900 rounded-xl cursor-pointer"
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
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {value.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-justify">
                    {value.description}
                  </p>

                  <button
                    className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                          items-center justify-center overflow-hidden hover:border-accent group mb-[2rem] md:mb-[0rem] ${
                            value.path === "false" ? "hidden" : "inherit"
                          }`}
                    onClick={() =>
                      window.open(value.path, "_blank", "noopener,noreferrer")
                    }
                  >
                    <BsArrowRight
                      className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                    ></BsArrowRight>
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      Acesse aqui
                    </span>
                  </button>
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
