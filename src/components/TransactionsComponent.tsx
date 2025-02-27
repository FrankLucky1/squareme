import { useGetTransactionsQuery } from "@/lib/api";
import React from "react";
import TransactionCard from "./utility/TransactionCard";
import Loader from "./utility/Loader";

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
      <div className="flex flex-col items-center justify-center max-h-[200px] max-sm:w-[80%] mt-4 p-4 sm:p-4 w-full max-w-sm mx-auto bg-[#ffe6d3] text-[#ff892f] rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2 py-4 px-6">
        <p className="font-sans text-base sm:text-lg font-semibold">{errorMessage}</p>
        <p className="text-xs sm:text-sm text-start">Please try reloading the page or check your network connection. If the issue persists, feel free to reach out. 😥</p>
      </div>
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

