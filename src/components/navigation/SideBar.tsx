"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React from "react";

const SideBar = () => {
  const pathname = usePathname(); // Get the current path
  const sideNav = [
    { name: "get started", image: "/getstarted.svg", link: "/" },
    { name: "dashboard", image: "/dashboardBlack.svg", link: "#" },
    { name: "accounts", image: "/empty-wallet.svg", link: "#" },
    { name: "transfers", image: "/transfers.svg", link: "#" },
    { name: "transactions", image: "/document.svg", link: "transactions" },
    { name: "settings", image: "/setting-2.png", link: "#" },
  ];

  return (
    <div className="hidden fixed md:flex flex-col items-start justify-start min-w-[263px] min-h-screen bg-white border-r border-[#E6EAEE]">
      <div className="flex w-full h-full">
        <ul className="flex flex-col w-full pt-[32px]">
          {sideNav.map((item) => (
            <li key={item.name} className="w-full h-full">
              <Link
                href={`/${item.link}`}
                className={`capitalize text-[15px] flex items-center justify-start gap-3 pl-[34px] py-[14.5px] w-full ${
                  pathname === `/${item.link}` ||
                  pathname === item.link
                    ? "bg-[#3976E8] text-white" // Active link styling
                    : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] bg-cover"
                />
                <span>{item?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

