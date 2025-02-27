"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React from "react";
import GlobeIcon from "../icons/GlobeIcon";
import DashboardIcon from "../icons/DashboardIcon";
import WalletIcon from "../icons/WalletIcon";
import TransactionIcon from "../icons/TransactionIcon";
import TransferIcon from "../icons/TransferIcon";
import SettingsIcon from "../icons/SettingsIcon";

const SideBar = () => {
  const pathname = usePathname(); // Get the current path
  const sideNav = [
    { name: "get started", icon: <GlobeIcon />, link: "/" },
    { name: "dashboard", icon: <DashboardIcon />, link: "#" },
    { name: "accounts", icon: <WalletIcon />, link: "#" },
    { name: "transfers", icon: <TransferIcon />, link: "#" },
    { name: "transactions", icon: <TransactionIcon />, link: "transactions" },
    { name: "settings", icon: <SettingsIcon />, link: "#" },
  ];

  return (
    <div className="hidden fixed md:flex flex-col items-start justify-start min-w-[263px] min-h-screen bg-white border-r border-[#E6EAEE]">
      <div className="flex w-full h-full">
        <ul className="flex flex-col w-full pt-[32px]">
          {sideNav.map((item) => (
            <li key={item.name} className="w-full h-full">
              <Link
                href={`/${item.link}`}
                className={`capitalize text-[15px] flex  items-center justify-start gap-3 pl-[34px] py-[14.5px] w-full ${
                  pathname === `/${item.link}` || pathname === item.link
                    ? "bg-[#3976E8] text-white"
                    : "text-[#04004D]"
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
  );
};

export default SideBar;

