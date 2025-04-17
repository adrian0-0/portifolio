import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useTransitionRouter } from "@/components/transiction";

const ProjectButton = () => {
  const router = useRouter();
  const { navigate } = useTransitionRouter();

  return (
    <div className="relative flex xl:justify-start justify-center items-center mt-[2rem] z-10">
      <div
        onClick={() => navigate("/workExperience")}
        className="relative w-[185px] h-[185px] flex justify-center  items-center"
      >
        <Image
          src={"/project-cycle.png"}
          alt="Meus Projetos"
          width={300}
          height={300}
          className="animate-[spin_150s_linear_infinite] max-w-[250px] max-h-[250px] min-w-[100px] min-h-[100px] cursor-pointer-none
"
        ></Image>
        <div className="absolute w-full h-[10rem] flex justify-center items-center group">
          <MdArrowForwardIos className="text-4xl group-hover:translate-x-2 transition-all duration-300"></MdArrowForwardIos>
        </div>
      </div>
    </div>
  );
};

export default ProjectButton;
