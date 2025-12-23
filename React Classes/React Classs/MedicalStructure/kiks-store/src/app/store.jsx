// we inport configureStore from redux toolkit to create the store
import { configureStore} from "@reduxjs/toolkit";

// we import the product api here to add it to the store
import { productApi } from "../apis/ProductApi";

// we import the cart reducer to manage the cart state
import cartReducer from "../component/MyProduct.jsx";

// we create the store using configureStore
export const store = configureStore({

    // we add the reducers to the store
    reducer: {

        // we add the product api reducer to the store
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
    },
    // we add the middleware to the store to enable caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>

        // we concatenate the product api middleware to the default middleware
        getDefaultMiddleware().concat(productApi.middleware),
});