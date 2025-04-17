import React from "react";
import Image from "next/image";

const FooterVector = () => {
  return (
    <div className="fixed -right-0 bottom-0 w-[200px] xl:w-[auto] duration-75 z-10 select-none pointer-events-none">
      <Image
        src="/red-waves.png"
        alt="Vetores"
        width={200}
        height={200}
        className="relative h-full w-full"
      />
    </div>
  );
};

export default FooterVector;
