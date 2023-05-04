import postSlice from "../postslices/postSlice"
import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../api/apiSlice"
export const store = configureStore({
    reducer:{
        post:postSlice,
        [apiSlice.reducerPath]:apiSlice.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})