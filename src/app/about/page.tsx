import React from "react";

const About = () => {
  return (
    <section>
      <div className="flex bg-white p-[2rem] rounded-xl text-black">
        <div>Resumee</div>
        <p>
          Eu sou um desenvolvedor de software e entusiasta de tecnologia, já
          trabalhei em projetos reais contribuindo ativamente no desenvolvimento
          de soluções de software como landing pages, gerenciador de estoque e
          plataforma de agendamento de reuniões
        </p>
        <div>Certificações</div>
        <ul>
          <li>
            Graduação: UNDB - Engenharia de Software (Concluído em Dezembro de
            2024)
          </li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Curso de Inglês Avançado - Yázigi</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
