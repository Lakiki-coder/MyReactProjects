// we are creating product api here because we will be fetching products from fakestoreapi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// creatApi is used to create an api slice
// fetchBaseQuery is a small wrapper around fetch that aims to simplify requests
export const productApi = createApi({

    // unique key that defines where the Redux store will store our cache
    reducerPath: 'productApi',

    // base query is a function that `fetchBaseQuery` uses to make requests)
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP_FAKESTORE_URL}),

    // endpoints are the different operations that we can perform using this API slice
    //endpoints is a function that receives a builder object as an argument
    // A builder is used to define different types of endpoints (queries and mutations)
    // endpoint is like a function that defines how to fetch or mutate data
    endpoints: (builder) => ({

        // defining an endpoint to get all products
        // builder.query is used to define a query endpoint
        getAllProducts: builder.query({

            // the query function defines how to fetch the data
            query: () => '/products',
        }),

        // defining an endpoint to get a product by its ID
        getProductsById: builder.query({

            // the query function takes an id as an argument and returns the endpoint to fetch that specific product
            query: (id) => `/products/${id}`,
        }),
    }),
});
export const {useGetAllProductsQuery, useGetProductsByIdQuery} = productApi;
