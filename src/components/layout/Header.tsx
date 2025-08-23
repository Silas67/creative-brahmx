import Link from "next/link";
import React from "react";

export const navbar = [
  { label: "Info", href: "/" },
  { label: "Expertise", href: "#services" },
  { label: "Index", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const Header = () => {
  return (
    <div className="w-full relative flex items-center justify-between md:px-[50px] px-[10px] pt-[20px] text-sm z-50 text-primary uppercase ">
      <div className="leading-[1] text-[16px] font-bold panchang">
        <h1 className=" ">Ce</h1>
        <h1>BX</h1>
      </div>

      {navbar.map((el, id) => (
        <Link href={el.href} key={id} className="group w-fit max-sm:hidden">
          {el.label}
          <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
        </Link>
      ))}

      <div className="lg:hidden py-1 px-4 border rounded-full">
        {" "}
        <h1>Menu</h1>
        <span className="w-1 h-1 bg-black"></span>
      </div>
    </div>
  );
};

export default Header;
