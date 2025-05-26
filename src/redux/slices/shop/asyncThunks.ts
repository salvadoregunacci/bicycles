import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    ICatalogPage,
    ICatalogPagePayload,
    ICategory,
    IItemFullInfo, IOrder,
    IOutfitItem,
    IPreviewCard,
    IShopItem
} from "../../../types.ts";
import {newItems} from "../../../data_mocup/newItems.ts";
import {outfitItems} from "../../../data_mocup/outfitItems.ts";
import categories from "../../../data_mocup/categories.ts";
import {reviews} from "../../../data_mocup/reviews.ts";
import {catalogPage1} from "../../../data_mocup/catalogPage1.ts";
import {itemFullInfo} from "../../../data_mocup/itemFullInfo.ts";
import {cartSimilarItems} from "../../../data_mocup/cartSimilarItems.ts";
import {RootState} from "../../store.ts";
import {blogItems} from "../../../data_mocup/blogItems.ts";
import {ordersItems} from "../../../data_mocup/orderItems.ts";

export const getOrders = createAsyncThunk<IOrder[], undefined, {
    rejectValue: string
}>("shop/getOrders", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get(`/orders`);

        const res = {
            status: 200,
            data: ordersItems,
        }

        if (res.status === 200) {
            return res.data as IOrder[];
        } else {
            return rejectWithValue("Failed to fetch [orders]")
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});


export const getBlogItems = createAsyncThunk<IPreviewCard[], undefined, {
    rejectValue: string
}>("shop/getBlogItems", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get(`/item/${itemId}`);

        const res = {
            status: 200,
            data: blogItems,
        }

        if (res.status === 200) {
            return res.data as IPreviewCard[];
        } else {
            return rejectWithValue("Failed to fetch [blog items]")
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});


export const getItemFullInfo = createAsyncThunk<IItemFullInfo, number, {
    rejectValue: string
}>("shop/getItemFullInfo", async (itemId, {rejectWithValue}) => {
    try {
        // const res = await axios.get(`/item/${itemId}`);

        const res = {
            status: 200,
            itemId,
            data: itemFullInfo,
        }

        if (res.status === 200) {
            return res.data as IItemFullInfo;
        } else {
            return rejectWithValue("Failed to fetch [item full info]")
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getBestItems = createAsyncThunk<IShopItem[], undefined, {
    rejectValue: string
}>("shop/getBestItems", async (_, {rejectWithValue}) => {
    try {
        // const res = await axios.get("/best_items");

        const res = {
            status: 200,
            data: newItems,
        }

        if (res.status === 200) {
            return res.data as IShopItem[];
        } else {
            return rejectWithValue("Failed to fetch [best items]");
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
            return rejectWithValue("Failed to fetch [new items]");
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
            return rejectWithValue("Failed to fetch [outfit items]");
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
            return rejectWithValue("Failed to fetch [categories]");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getReviews = createAsyncThunk<IPreviewCard[], undefined, {
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
            return rejectWithValue("Failed to fetch [reviews]");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getCatalogPage = createAsyncThunk<ICatalogPage, ICatalogPagePayload, {
    rejectValue: string
}>("shop/getCatalogPage", async (pageIndex, {rejectWithValue}) => {
    try {
        // const res = await axios.get(`/catalog/${pageIndex}?perPage=12`);

        const res = {
            pageIndex,
            status: 200,
            data: catalogPage1,
        }

        if (res.status === 200) {
            return res.data;
        } else {
            return rejectWithValue("Failed to fetch [catalog page]");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});

export const getCartSimilarItems = createAsyncThunk<IShopItem[], undefined, {
    state: RootState,
    rejectValue: string
}>("shop/getCartSimilarItems", async (_, {rejectWithValue, getState}) => {
    try {
        const state = getState()["shop"];

        // const res = await axios.get(`/similar_items`, {
        //     params: {
        //         brands: state.cartItems.map(item => item.brand),
        //         categories: state.cartItems.map(item => item.category),
        //     }
        // });

        const res = {
            status: 200,
            data: cartSimilarItems,
            state
        }

        if (res.status === 200) {
            return res.data;
        } else {
            return rejectWithValue("Failed to fetch [similar items]");
        }
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(err.message);
        } else {
            return rejectWithValue("Unknown error");
        }
    }
});