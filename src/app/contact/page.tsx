"use client";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="h-full">
      <div className="container mx-auto md:py-[5rem] mt-[2rem] md:mt-[0rem] text-center xl:text-left flex items-center justify-center md:h-full md:w-1/2">
        <div className=" flex flex-col w-full max-w-[700px}">
          <motion.h2
            className="h2 text-center mb-12 "
            variants={fadeIn}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
          >
            Se interessou <span className="text-accent">vamos conversar.</span>
          </motion.h2>
          <motion.form
            className="flex-1 flex flex-col gap-[1.5rem] w-full mx-auto"
            variants={fadeIn}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
          >
            <input type="text" placeholder="Nome" className="input"></input>
            <div className="flex md:flex-row flex-col gap-[1.5rem] w-full">
              <input
                type="tel"
                placeholder="Número de Celular"
                className="input"
              ></input>
              <input
                type="email"
                placeholder="E-mail"
                className="input"
              ></input>
            </div>
            <input type="text" placeholder="Assunto" className="input"></input>
            <textarea placeholder="Mensagem" className="textarea"></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex 
            items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              ></BsArrowRight>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
