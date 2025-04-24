import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICategory, IOutfitItem, IReview, IShopItem, IShopState} from "../../types.ts";
import {newItems} from "../../data_mocup/newItems.ts";
import categories from "../../data_mocup/categories.ts";
import {outfitItems} from "../../data_mocup/outfitItems.ts";
import {reviews} from "../../data_mocup/reviews.ts";

export const getBestItems = createAsyncThunk<IShopItem[], undefined, {
    rejectValue: string
}>("shop/getBestItems", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/best_items");

        const res = {
            status: 200,
            data: newItems,
        };

        if (res.status === 200) {
            return res.data as IShopItem[];
        } else {
            return rejectWithValue("Failed to fetch best items");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getNewItems = createAsyncThunk<IShopItem[], undefined, {
    rejectValue: string
}>("shop/getNewItems", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/new_items");

        const res = {
            status: 200,
            data: newItems,
        };

        if (res.status === 200) {
            return res.data as IShopItem[];
        } else {
            return rejectWithValue("Failed to fetch new items");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getOutfitItems = createAsyncThunk<IOutfitItem[], undefined, {
    rejectValue: string
}>("shop/getOutfitItems", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/outfit");

        const res = {
            status: 200,
            data: outfitItems,
        };

        if (res.status === 200) {
            return res.data as IOutfitItem[];
        } else {
            return rejectWithValue("Failed to fetch outfit items");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getCategories = createAsyncThunk<ICategory[], undefined, {
    rejectValue: string
}>("shop/getCategories", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/categories");

        const res = {
            status: 200,
            data: categories,
        };

        if (res.status === 200) {
            return res.data as ICategory[];
        } else {
            return rejectWithValue("Failed to fetch categories");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getReviews = createAsyncThunk<IReview[], undefined, {
    rejectValue: string
}>("shop/getReviews", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/reviews");

        const res = {
            status: 200,
            data: reviews,
        }

        if (res.status === 200) {
            return res.data;
        } else {
            return rejectWithValue("Failed to fetch reviews");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

const initialState: IShopState = {
    bestItems: null,
    newItems: null,
    categories: null,
    outfitItems: null,
    reviews: null,
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNewItems.fulfilled, (state, action) => {
            state.newItems = action.payload;
        });
        builder.addCase(getOutfitItems.fulfilled, (state, action) => {
            state.outfitItems = action.payload;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
        builder.addCase(getBestItems.fulfilled, (state, action) => {
            state.bestItems = action.payload;
        });
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
        })
    }
});

export const {} = shopSlice.actions;
export default shopSlice.reducer;