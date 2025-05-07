"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Projects = () => {
  const workExperienceData = [
    {
      name: "Gerenciador de estoque",
      description: `Nesse projeto eu desenvolvi uma REST API usando da arquitetura do data mapper pelo framework do nestjs. O projeto
       tem uma interface visual onde o usuário primeiro se registra e depois pode controlar, editar, criar e filtrar tarefas que 
       podem ser anexadas aos funcionários e também a um objeto estocado.`,
      path: "https://github.com/adrian0-0/backend-task-management",
      img: "/taskmanagement-view.png",
      alt: "Tabela do gerenciador de estoque",
    },
    {
      name: "Plataforma de agendamento de reunião",
      description: `Criação de uma plataforma de agendamento de reunião que teria por objetivo simplificar os processos de tabelação
      em excel em um única plataforma onde poderia se verificar quem agendou a reunião, os convidados e o processo de andamento da
      reunião e também o encaminhamento do link da reunião via integração com a API do Zoom.`,
      path: "false",
      img: "/nest-js-logo.png",
      alt: "NestJS",
    },
    {
      name: "Maranhão Gestão",
      description: `Desenvolvimento de uma landing page de evento, onde o objetivo da página era conduzir leads a se 
      inscreverem e participarem do evento sendo também divulgado nele as logomarcas das empresas patrocinadoras do evento.`,
      path: "https://magestao.inaed.com/",
      img: "/magestao.png",
      alt: "Landing page do Maranhão Gestão",
    },
    {
      name: "Reformulação do site INAED",
      description: `Redesign da landing page com o desenvolvimento de um novo layout para o site do INAED, utilizando de uma análise
      heurística sobre a disposição do contéudo em página.`,
      path: "https://inaed.com/",
      img: "/inaed.png",
      alt: "Landing page do INAED",
    },
  ];

  return (
    <div className="md:h-full xl:h-[90%]">
      <div className="flex flex-col justify-center items-center xl:h-full xl:mt-0 mt-[2rem]">
        <h2 className="xl:text-5xl md:text-4xl text-2xl font-medium md:mb-[1rem] ">
          Meus <span className="text-accent">projetos.</span>
        </h2>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={true}
          modules={[Pagination]}
          className="container max-w-[350px] md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1400px] mt-[1rem] "
        >
          {workExperienceData.map((value, index) => (
            <SwiperSlide
              key={index}
              className="bg-[rgba(62,18,18,0.15)] rounded-xl cursor-pointer "
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-[250px] object-cover"
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
                        items-center justify-center overflow-hidden hover:border-accent group mb-[2rem] md:mb-[0rem] ${
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
      </div>
    </div>
  );
};

export default Projects;
