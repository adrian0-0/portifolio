import React from "react";
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-auto opacity-50 pointer-events-none">
      <Image
        src="/top-left-img.png"
        alt="Tinta derramada no background"
        width={400}
        height={400}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default TopLeftImg;
