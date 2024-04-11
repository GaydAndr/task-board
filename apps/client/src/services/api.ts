import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: 'api/',
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 3})


export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Board'],
  endpoints: () => ({}),

})

