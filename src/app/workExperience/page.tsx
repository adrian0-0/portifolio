"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkExperience = () => {
  const workExperienceData = [
    {
      name: "Gerenciador de estoque",
      description: `Nesse projeto eu desenvolvi uma REST API usando da arquitetura do data mapper pelo framework do nestjs. O projeto
       tem uma interface visual onde o usuário primeiro se registra e depois pode controlar, editar, criar e filtrar tarefas que 
       podem ser anexadas aos funcionários e também a um objeto estocado.`,
      path: "",
      img: "/taskmanagement-view.png",
      alt: "",
    },
    {
      name: "Plataforma de agendamento de reunião",
      description: `Criação de uma plataforma de agendamento de reunião que teria por objetivo simplificar os processos de tabelação
      em excel em um única plataforma onde poderia se verificar quem agendou a reunião, os convidados e o processo de andamento da
      reunião e também o encaminhamento do link da reunião via integração com a API do Zoom.`,
      path: "false",
      img: "/taskmanagement-view.png",
      alt: "",
    },
    {
      name: "Maranhão Gestão",
      description: `Desenvolvimento de uma landing page de evento, onde o objetivo da página era conduzir leads a se 
      inscreverem e participarem do evento sendo também divulgado nele as logomarcas das empresas patrocinadoras do evento.`,
      path: "",
      img: "/taskmanagement-view.png",
      alt: "",
    },
    {
      name: "Reformulação do site INAED",
      description: `Redesign da landing page com o desenvolvimento de um novo layout para o site do INAED, utilizando de uma análise
      heurística sobre a disposição do contéudo em página.`,
      path: "",
      img: "/taskmanagement-view.png",
      alt: "",
    },
  ];

  return (
    <div className="h-full">
      <div className="flex flex-col justify-center items-center h-full ">
        <h2 className="h2">
          Minhas <span className="text-accent">experiências</span>
        </h2>

        <div>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className=" max-w-7xl xl:px-[0rem] px-[1rem]"
          >
            {workExperienceData.map((value, index) => (
              <SwiperSlide
                key={index}
                className="max-w-lg bg-[rgba(62,18,18,0.15)] rounded-xl shadow-md  h-50 cursor-pointer"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
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
                  <button
                    className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                        items-center justify-center overflow-hidden hover:border-accent group ${
                          value.path === "false" ? "hidden" : "inherit"
                        }`}
                    onClick={() => window.open(value.path, "_blank")}
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
          {/* <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-white/40">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/taskmanagement-view.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Gerenciador de estoque
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nesse projeto eu desenvolvi uma REST API usando da arquitetura
                do data mapper pelo framework do nestjs. O projeto tem uma
                interface visual onde o usuário primeiro se registra e depois
                pode controlar, editar, criar e filtrar tarefas que podem ser
                anexadas aos funcionários e também a um objeto estocado.
              </p>
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                        items-center justify-center overflow-hidden hover:border-accent group"
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
          </div>
          <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-white/40">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/taskmanagement-view.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Maranhão Gestão
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Desenvolvimento do frontend de uma landing page de evento, onde
                o objetivo da página era conduzir leads a se inscreverem e
                participarem do evento sendo também divulgado nele as logomarcas
                das empresas patrocinadoras do evento.
              </p>
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                        items-center justify-center overflow-hidden hover:border-accent group"
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
          </div>
          <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-white/40">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/taskmanagement-view.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Reformulação do site INAED
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
                        items-center justify-center overflow-hidden hover:border-accent group"
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
