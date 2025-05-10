"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { send } from "@emailjs/browser";
import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";
import { FaCircleCheck } from "react-icons/fa6";
import { fadeIn } from "@/configs/fadeIn";

interface IContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  time: string;
}

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const formDefaultValues: IContactForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    time: dayjs().format("DD/MM/YYYY - HH:mm"),
  };

  const schemaValidation = Yup.object({
    name: Yup.string()
      .min(3, "Digite seu nome completo")
      .required("O campo nome precisa ser preenchido."),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.(com)$/,
        "O email não é valido"
      )
      .required("O campo e-mail precisa ser preenchido."),
    phone: Yup.string()
      .matches(/^\+55 \(\d{2}\) \d{5}-\d{4}$/, "Número de celular não é válido")
      .required("O campo assunto precisa ser preenchido"),
    subject: Yup.string()
      .min(3, "O campo assunto precisa ter mais de 3 caracteres")
      .required("O campo assunto precisa ser preenchido"),
    message: Yup.string()
      .min(3, "Digite a mensagem completa")
      .required("O campo mensagem precisa ser preenchido"),
    time: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IContactForm>({
    resolver: yupResolver(schemaValidation),
    defaultValues: formDefaultValues,
  });

  const handleService = (data: any) => {
    const options = {
      publicKey: "yUbh4kWtj9TvS-kqK",
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    };
    const emailParams = {
      serviceId: "service_207kw8g",
      templateId: "template_lf7vilx",
    };
    const { serviceId, templateId } = emailParams;
    setShowToast(true);
    send(serviceId, templateId, data, options);
    reset();
  };

  return (
    <div className="md:h-full h-auto md:pb-[0rem] pb-[8rem]">
      <div className=" container mx-auto mt-[2rem] md:mt-[0rem]  xl:text-left flex items-center justify-center md:h-[80%] xl:h-full md:w-2/3 xl:w-1/2">
        <div className=" flex flex-col w-full max-w-[700px}">
          <motion.h2
            className="xl:text-5xl md:text-3xl text-2xl font-medium mb-[2rem] text-center"
            variants={fadeIn}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 2 }}
          >
            Se interessou <span className="text-red-500">vamos conversar.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 2 }}
            className="flex-1 flex flex-col gap-[1.5rem] w-full mx-auto"
            onSubmit={handleSubmit(handleService)}
          >
            <div>
              <input
                {...register("name")}
                name="name"
                placeholder="Nome"
                className="input"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex xl:flex-row flex-col gap-[1.5rem] w-full">
              <div className="w-full">
                <IMaskInput
                  mask="+55 (00) 00000-0000"
                  className="input"
                  placeholder="Número de celular com DDD"
                  onAccept={(value) => setValue("phone", value)}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  {...register("email")}
                  name="email"
                  placeholder="E-mail"
                  className="input"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                {...register("subject")}
                name="subject"
                placeholder="Assunto"
                className="input"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message")}
                name="message"
                placeholder="Mensagem"
                className="textarea"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
              <input type="hidden" {...register("time")} />
            </div>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
            >
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
            </button>
          </motion.form>
        </div>
      </div>
      {showToast && (
        <motion.div
          variants={fadeIn}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed bottom-4 left-4 bg-green-950 text-white px-4 py-3 rounded-lg shadow-lg flex items-start justify-between min-w-[250px] z-50"
        >
          <div>
            <div className="flex items-center flex-wrap gap-[0.5rem]">
              <FaCircleCheck></FaCircleCheck>
              <p className="font-semibold">Sucesso!</p>
            </div>
            <p className="text-sm">Sua mensagem foi enviada com sucesso.</p>
          </div>
          <button
            className="ml-4 text-white hover:text-gray-200 text-xl font-bold leading-none"
            onClick={() => setShowToast(false)}
          >
            &times;
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
