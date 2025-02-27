"use client";
import { useState } from "react";
import { useGetTransactionsQuery } from "@/lib/api";
import { Checkbox, Pagination, Table } from "@mantine/core";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import Loader from "./utility/Loader";

// Define the transaction type
interface Transaction {
  id: string;
  amount: number;
  transaction_id: string;
  transaction_type: string;
  date: string;
  time: string;
  status: string;
}
interface TransactionApiResponse {
  id: { $oid: string }; // Assuming it's an object with an "$oid" property
  amount: number;
  transaction_id: { $oid: string }; // Same assumption for transaction_id
  transaction_type: string;
  date: string;
  time: string;
  status: string;
}

export const formatDate = (dateString: string): string => {
  const [month, day, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};
// Ensure API response is properly typed
const DataTable: React.FC = () => {
  const { data, error, isLoading } = useGetTransactionsQuery();

  // Ensure type safety with optional chaining
  const formattedData: Transaction[] =
    data?.map((item?: TransactionApiResponse) => ({
      id: typeof item?.id === "string" ? item?.id : item?.id?.$oid || "",
      amount: item?.amount || 0,
      transaction_id: `TR_${
        item?.transaction_id?.$oid || item?.transaction_id || ""
      }`,
      transaction_type: item?.transaction_type || "",
      date: item?.date || "",
      time: item?.time || "",
      status: item?.status || "",
    })) || [];

  // Pagination state
  const [page, setPage] = useState<number>(1);
  const pageSize = 7;
  const totalPages = Math.ceil(formattedData.length / pageSize);
  const paginatedData = formattedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Select All / Individual Selection
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const allSelected =
    selectedRows.length === paginatedData.length && paginatedData.length > 0;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((item) => item?.id));
    }
  };

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Show loading or error state
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
      <p className="text-red-500 text-lg">
        
        <div className="flex justify-between py-4 px-8 bg-[#ffe6d3]  text-[#ff892f]">
          <p className="font-sans">{errorMessage}{" "}</p>
        </div>
      </p>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4 h-full">
      <Table width="100%" highlightOnHover>
        <Table.Thead __size="12px">
          <Table.Tr
            style={{ fontSize: "12px" }}
            className="text-xs leading-4  pb-[23px] text-[#84919A] uppercase"
          >
            <Table.Th className="w-12  text-center pb-[23px] ">
              {/* Uncomment if using checkboxes */}
              <Checkbox checked={allSelected} onChange={toggleSelectAll} />
            </Table.Th>
            <Table.Th className="text-left w-[120px] pb-[23px]">
              Amount
            </Table.Th>
            <Table.Th className="text-left w-[180px] pb-[23px]">
              Transaction ID
            </Table.Th>
            <Table.Th className="text-left w-[150px] pb-[23px]">
              Transaction Type
            </Table.Th>
            <Table.Th className="text-left w-[100px] pb-[23px]">Date</Table.Th>
            <Table.Th className="text-left w-[100px] pb-[23px]">Time</Table.Th>
            <Table.Th className="text-center w-[140px] pb-[23px]">
              Status
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody className="border border-[#EDEDF2] rounded-xl text-[#535379] text-sm capitalize">
          {paginatedData.map((item?) => (
            <Table.Tr key={item?.id} className="hover:bg-gray-50 h-[62px]">
              <Table.Td className="text-center">
                {" "}
                <Checkbox
                  checked={item?.id ? selectedRows.includes(item.id) : false}
                  onChange={() => item?.id && toggleRowSelection(item.id)}
                />
              </Table.Td>
              <Table.Td className="text-left text-black">
                ₦{item?.amount.toLocaleString()}
              </Table.Td>
              <Table.Td className="text-left">{item?.transaction_id}</Table.Td>
              <Table.Td className="text-left">
                {item?.transaction_type}
              </Table.Td>
              <Table.Td className="text-left">
                {formatDate(item?.date ? item?.date : "")}
              </Table.Td>
              <Table.Td className="text-left">{item?.time}</Table.Td>
              <Table.Td className="text-center">
                <span
                  className={`inline-flex items-center justify-center gap-2 min-w-[106px] px-3 py-1 rounded-full border text-xs ${
                    item?.status === "processed"
                      ? "border-[#5DC090] bg-[#EFFDED] text-[#5DC090]"
                      : "border-[#F14156] bg-[#FEECEE] text-[#F14156]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {item?.status}
                </span>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <div className="flex items-center text-sm text-[#696D8C] justify-between">
        <span>{`Showing ${page * pageSize} of ${
          formattedData?.length
        } results`}</span>
        <Pagination
          total={totalPages}
          onChange={setPage}
          dotsIcon={HiMiniChevronDoubleRight}
          siblings={0}
          boundaries={1}
          classNames={{
            control:
              "border border-gray-300 rounded-md w-[32px] h-[32px] px-3 py-1 transition-all",
            dots: "border border-gray-300  rounded-md w-[32px] h-[32px] transition-all",
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;

