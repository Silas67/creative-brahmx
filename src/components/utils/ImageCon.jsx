import React from "react";
import Image from "next/image";

export const ImageCon = ({ src, className = "" }) => {
  return (
    <div className="w-[90px] h-[60px] overflow-hiddn max-sm:w-[150px] max-sm:h-[100px]">
      <Image
        src={src}
        alt="Image"
        className={`object-cover w-full h-full ${className}`}
        width={100}
        height={100}
      />
    </div>
  );
};
