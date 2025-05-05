import {configureStore} from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice.ts";
import shopSlice from "./slices/shop/slice.ts";

export const store = configureStore({
    reducer: {
        general: generalSlice,
        shop: shopSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;