import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-20 bg-white text-black border-b border-[#E6EAEE] px-[25px] md:px-9 shadow-sm fixed">
      
      
      <Image
        src="/menu.svg"
        alt="logo"
        width={100}
        height={24}
        className="w-6 h-6 bg-cover max-sm:block hidden"
      />
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={24}
        className="w-[100px] h-[24px] bg-cover"
      />

      <div className="flex gap-2 md:gap-4 md:w-[113px] items-center justify-between">
        <Image
          src="/bell.svg"
          alt="bell"
          width={24}
          height={24}
          className="w-4 h-4 md:w-[24px] md:h-[24px] bg-cover"
        />
        <div className="flex gap-[7px] items-center">
          <span className="w-8 h-8 md:w-[50px] md:h-[50px] text-[10.24px] md:text-base rounded-full bg-[#0CBC8B] text-white flex items-center justify-center font-medium">
            GA
          </span>
          <Image
          src="/down.svg"
          alt="arrow-down"
          width={24}
          height={24}
          className="w-[8px] h-[4.76px] bg-cover hidden md:block"
        />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

