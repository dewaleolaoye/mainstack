import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configs } from "@/constants";
import { ITransactions, IUser, IWallet } from "@/interfaces";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configs.BASE_URL}`,
  }),

  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/user',
      transformResponse: (response: IUser) => response,
    }),

    getWallet: builder.query({
      query: () => '/wallet',
      transformResponse: (response: IWallet) => response,
    }),

    getTransactions: builder.query({
      query: () => `/transactions`,
      transformResponse: (response: ITransactions[]) => response,
    }),
  }),
});


export const {
  useGetUserQuery,
  useGetWalletQuery,
  useGetTransactionsQuery,
} = requestApi;

export default requestApi;