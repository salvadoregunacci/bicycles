import {configureStore} from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice.ts";
import shopSlice from "./slices/shop/slice.ts";
import orderSlice from "./slices/order/slice.ts";

export const store = configureStore({
    reducer: {
        general: generalSlice,
        shop: shopSlice,
        order: orderSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;