import { useGetTransactionsQuery } from "@/lib/api";
import React from "react";
import TransactionCard from "./utility/TransactionCard";
import { Loader } from "@mantine/core";

const TransactionsComponent = () => {
  const { data, error, isLoading } = useGetTransactionsQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-[40vh]">
        {" "}
        <Loader />
      </div>
    );
  if (error) {
    const errorMessage =
      "status" in error
        ? `Error: ${error.status}`
        : error.message || "An unknown error occurred";
    return (
        <div className="flex justify-between py-2 px-5 w-[40%] ml-6 text-xs mt-10 bg-[#ffe6d3]  text-[#ff892f]">
          <p className="font-sans">{errorMessage} </p>
        </div>
    );
  }
  return (
    <div className="flex flex-col items-start justify-center gap-3 w-full h-full px-6 pt-10">
      <h1 className="text-[17px] font-semibold ">Transactions</h1>
      <div className="flex flex-col items-start justify-center gap-[21px] w-full">
        {data?.map((item, i) => (
          <TransactionCard key={i} details={item} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsComponent;

