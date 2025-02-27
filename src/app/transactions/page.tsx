"use client";
import DataTable from "@/components/DataTable";
import TransactionsComponent from "@/components/TransactionsComponent";
// import { useGetTransactionsQuery } from "@/lib/api";
import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";

const Transactions = () => {
  return (
    <div className="flex flex-col items-start justify-start rounded-[6px] w-full h-full bg-white pb-[38px] md:gap-[61.28px]">
      <header className="flex max-sm:flex-col gap-3 items-start md:items-center justify-between w-full md:border-b border-[#E6EAEE] pl-[25px] pt-[10px] md:pt-[36px] md:pl-[70px] pr-[32px] md:h-[91.72px]">
        {/* desktop */}
        <div className="flex justify-between w-full items-center">
          <select name="filter" id="filter" className="h-auto">
            <option value="">All Accounts</option>
            <option value="">Transactions</option>
            <option value="">Last 30 days</option>
          </select>
          <div className="w-auto flex max-md:flex-wrap-reverse items-center  gap-4  justify-end text-sm">
            <div className="flex items-center justify-center gap-3 w-full  text-[#71717A] max-sm:hidden ">
              <p className="text-base font-medium leading-[19.36px] flex-nowrap ">
                Select date range:
              </p>
              <button className="border border-[#D0D5DD] rounded-[8px] text-sm w-auto h-[40px] leading-[22px] px-4 flex items-center justify-center gap-[8px]">
              <LuCalendarDays /> June 6, 2023 - Jun 15, 2023
              </button>
            </div>
            <button className="border border-[#D0D5DD] rounded-[8px] gap-[8px] text-[#344054] flex items-center justify-center text-sm w-[105px] h-[40px]">
              <FiUploadCloud /> Export
            </button>
          </div>
        </div>
        {/* mobile */}
        <div className="hidden items-center justify-between gap-3 w-full  text-[#71717A] max-md:flex">
          <p className="text-[13px] font-medium leading-[19.5px] flex-nowrap ">
            Select date range:
          </p>
          <button className="border border-[#D0D5DD] rounded-[8px] text-xs w-[203px] h-[40px] leading-[18px] px-4 ">
            June 6, 2023 - Jun 15, 2023
          </button>
        </div>
      </header>
      <div className="lg:flex w-[1098.05px] h-[525px] mx-auto hidden">
        <DataTable />
      </div>
      <div className="lg:hidden w-full f-full mx-auto block">
        <TransactionsComponent/>
      </div>
    </div>
  );
};

export default Transactions;

