import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ApiHandler = createApi({
  reducerPath: "showdata",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakerapi.it/api/v1/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (params) => {
        console.log("params", params);
        return {
          url: `persons`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetDataQuery } = ApiHandler;
