"use client"
import { BarChart } from "@/components/BarChart";
import { useGetChartDataQuery } from "@/lib/api";
import Image from "next/image";

export default function Home() {
  const {data, error} = useGetChartDataQuery()

  console.log("values", data, error)
  return (
    <div className="md:pl-14 py-12 flex flex-col w-full h-full">
      <div className="flex w-full border-b border-[#E6EAEE] pl-[25px] md:pl-[36px] md:pb-5 md:h-[40px]">
        <h2 className="capitalize font-semibold text-[15px] md:text-base px-4 md:pb-5 flex md:h-[40px] pb-[9.5px] border-b border-[#3976E8]">
          online payments
        </h2>
      </div>
      <div className="flex w-full h-auto px-[36px] py-[24.49px] md:py-[49.55px] flex-col items-start justify-start ">
        <div className="w-[325px] h-[128px] md:h-[115px] pt-4 px-5 md:px-7 md:pb-[23px] gap-[4px] rounded-[5px] bg-[#fff] border border-[#E4E4E7]">
          <p className="uppercase text-[#8F8E8E] h-6 text-[11px]">
            Account Details
          </p>
          <p className="uppercase text-[11px] h-6">STERLING BANK</p>
          <div className="flex w-full justify-between h-7 items-center">
            <p className="font-bold text-[21px]">8000000000</p>
            <span className="bg-[#9F56D433] rounded-[8px] flex gap-[2px] w-[70px] text-[#9F56D4] items-center justify-center text-xs pt-[6px] px-2 pb-1">
              <Image src={"/copy.svg"} width={16} height={16} alt="copy" /> Copy
            </span>
          </div>
          <p className="text-[11px] mt-[3px] block md:hidden">
            OGEDENGBE FRUITS STORE
          </p>
        </div>
      </div>
      <div className="hidden md:w-[1047px] mx-auto h-[491px] md:flex flex-col items-start justify-start rounded-[10px] bg-[#FAFAFA] border border-[#E4E4E7] px-[30px] pb-[30px] pt-5">
        <div className="flex items-center justify-between w-full mb-[30px]">
          <div className="text-[#71717A] flex gap-[21px] items-center">
            <p className="font-semibold text-sm">Showing data for</p>
            <select
              name=""
              id="date"
              className="border border-[#DADAE7] bg-white rounded-[8px] px-4 py-[10px] w-[154px] h-[42px] text-sm font-semibold outline-none"
            >
              <option value="">Last 7 days</option>
              <option value="">Today</option>
              <option value="">Last 30 days</option>
            </select>
          </div>
          <div className="flex items-center justify-center text-sm">
            <p className="w-[116px] h-[42px] flex items-center justify-center rounded-[5px] text-center">
              Today
            </p>
            <p className="w-[116px] h-[42px] flex items-center justify-center rounded-[5px] text-center bg-[#00C6FB0F]">
              Last 7 days
            </p>
            <p className="w-[116px] h-[42px] flex items-center justify-center rounded-[5px] text-center">
              Last 30 days
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start border border-[#E4E4E7] rounded-[6px] w-full h-full bg-white px-[28px] pb-[38px] pt-[25px]">
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm font-bold leading-[35.18px] text-[#424242]">
              Revenue
            </p>
            <span className="text-sm flex items-center justify-center gap-1">
              <p className="text-[#6DC27F]">+0.00%</p> vs Last 7 days
            </span>
          </div>
          <div className="flex items-center mb-6">
            <p className="font-bold text-[35.18px] flex items-center gap-3">
              ₦0.00{" "}
              <span className="text-[13px] font-normal">in total value</span>
            </p>
          </div>
          <div className="flex w-[932px] h-full max-h-[209.51px]">
            <BarChart value={data ?? []}/>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden w-[336px] mx-auto h-[279px] rounded-[8px] border boreder-[#C4C8D3] bg-white max-md:flex flex-col items-start justify-start py-[15px]">
        <div className="w-full pl-[19px] pr-[20px] flex items-center justify-between">
          <h1>Revenue</h1>
          <select
            name=""
            id="date1"
            className="border border-[#C4C8D3]  rounded-[12.5px] w-[80px] h-[25px] text-xs outline-none "
          >
            <option value="weekly">Weekly</option>
            <option value="">Last 7 days</option>
            <option value="">Last 30 days</option>
          </select>
        </div>
        <div className="flex w-[336px] h-[279px]">
          <BarChart value={data ?? []}/>
        </div>
      </div>
    </div>
  );
}

