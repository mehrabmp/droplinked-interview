import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetProductsResponse, GetProductResponse } from '@/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://apiv2.droplinked.com' }),
  endpoints: builder => ({
    getProducts: builder.query<GetProductsResponse, void>({
      query: () => '/collection/public/testunstoppable',
    }),
    getProduct: builder.query<GetProductResponse, string>({
      query: id => `/product/public/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
