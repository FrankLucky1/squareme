"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import GlobeIcon from "../icons/GlobeIcon";
import DashboardIcon from "../icons/DashboardIcon";
import WalletIcon from "../icons/WalletIcon";
import TransferIcon from "../icons/TransferIcon";
import TransactionIcon from "../icons/TransactionIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Link from "next/link";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const sideNav = [
    { name: "get started", icon: <GlobeIcon />, link: "/" },
    { name: "dashboard", icon: <DashboardIcon />, link: "#" },
    { name: "accounts", icon: <WalletIcon />, link: "#" },
    { name: "transfers", icon: <TransferIcon />, link: "#" },
    { name: "transactions", icon: <TransactionIcon />, link: "transactions" },
    { name: "settings", icon: <SettingsIcon />, link: "#" },
  ];
  const handleMenuOpen = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-20 bg-white text-black border-b border-[#E6EAEE] px-[25px] md:px-9 shadow-sm fixed">
     
      <MenuIcon
        className="w-6 h-6 bg-cover max-sm:block hidden relative"
        onClick={handleMenuOpen}
        aria-label="menu"
      />

      {/* NavMenu */}
      <>
        <div data-testid="overlay" onClick={()=>setOpenMenu(false)}
          className={`fixed inset-0 bg-transparent bg-opacity-50 z-[-1] transition-opacity ${
            openMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>
        {openMenu && (
          <div
            className={`fixed bg-white h-screen w-[65vw] top-20 left-0 z-50 shadow-lg transform transition-all duration-300 ease-in-out ${
              openMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex w-full h-full">
              <ul className="flex flex-col w-full gap-2">
                {sideNav.map((item) => (
                  <li
                    key={item.name}
                    className="w-full h-16"
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    <Link
                      href={`/${item.link}`}
                      className={`capitalize text-[15px] flex  items-center justify-start gap-3 pl-[34px] py-[14.5px] w-full 
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>

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

