import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://json-server-project-production-3755.up.railway.app/" }), // Mock API
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => "/transactions",
    }),
    getChartData: builder.query<ChartData[], void>({
      query: () => "/chartData",
    }),
  }),
});

// Auto-generated hooks from RTK Query
export const { useGetTransactionsQuery, useGetChartDataQuery } = api;

// Define TypeScript type for Users
export interface Transaction {
  id: {
      $oid: string
    },
    amount: number,
    transaction_id: {
      $oid: string
    },
    transaction_type: string,
    date: string,
    time: string,
    status: string

}

export interface ChartData {
    month: string,
    amount:number
}
