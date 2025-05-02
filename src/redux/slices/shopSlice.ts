import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    ICatalogFilter,
    ICatalogPage,
    ICatalogPagePayload,
    ICategory,
    IOutfitItem,
    IReview,
    IShopItem,
    IShopState
} from "../../types.ts";
import {newItems} from "../../data_mocup/newItems.ts";
import categories from "../../data_mocup/categories.ts";
import {outfitItems} from "../../data_mocup/outfitItems.ts";
import {reviews} from "../../data_mocup/reviews.ts";
import {catalogPage1} from "../../data_mocup/catalogPage1.ts";
import {CatalogSortType, CatalogViewType} from "../../enums.ts";

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
    currency: "\u{20B4}",
    bestItems: null,
    newItems: null,
    categories: null,
    outfitItems: null,
    reviews: null,
    catalogFilter: {
        onlyInStock: false,
        categories: {
            triathlon: {
                value: false,
                title: "Велосипеди для тріатлону",
            },
            mountain: {
                value: false,
                title: "Гірські велосипеди",
            },
            city: {
                value: false,
                title: "Міські велосипеди",
            },
            gravel: {
                value: false,
                title: "Гравійні велосипеди",
            },
            trek_marlin_4_matte_anthracite_atb_29_2022: {
                value: false,
                title: "Двопідвісні велосипеди",
            },
            electric: {
                value: false,
                title: "Электровелосипеди",
            },
            child: {
                value: false,
                title: "Дитячі",
            }
        },
        price: {
            min: 0,
            max: 100000,
        },
        brands: {
            bianci: {
                value: false,
                title: "Bianci",
            },
            bmc: {
                value: false,
                title: "BMC",
            },
            ciclistino: {
                value: false,
                title: "Ciclistino",
            },
            cipolini: {
                value: false,
                title: "Cipollini",
            },
            colnago: {
                value: false,
                title: "Colnago"
            },
            trek: {
                value: false,
                title: "Trek"
            },
            merida: {
                value: false,
                title: "Merida"
            },
        },
        frameMaterials: {
            aluminum: {
                value: false,
                title: "Алюміній",
            },
            carbon: {
                value: false,
                title: "Карбон",
            },
            steel: {
                value: false,
                title: "Сталь",
            }
        },
        colors: [
            {
                value: "#F2F1EF",
                isSelected: false,
            },
            {
                value: "#38D5C8",
                isSelected: false,
            },
            {
                value: "#ACB690",
                isSelected: false,
            },
            {
                value: "#CC7E3B",
                isSelected: false,
            },
            {
                value: "#740222",
                isSelected: false,
            },
            {
                value: "#44ACFB",
                isSelected: false,
            },
            {
                value: "#FEF95F",
                isSelected: false,
            },
            {
                value: "#0D7F19",
                isSelected: false,
            },
            {
                value: "#FFD536",
                isSelected: false,
            },
            {
                value: "#FE7E56",
                isSelected: false,
            },
            {
                value: "#AC632C",
                isSelected: false,
            },
            {
                value: "#FD0012",
                isSelected: false,
            },
            {
                value: "#25FD3C",
                isSelected: false,
            },
            {
                value: "#353839",
                isSelected: false,
            },
            {
                value: "#FEA32A",
                isSelected: false,
            },
            {
                value: "#E5E4E2",
                isSelected: false,
            },
            {
                value: "#79526F",
                isSelected: false,
            },
            {
                value: "#FEC0CB",
                isSelected: false,
            },
            {
                value: "#BDBDBD",
                isSelected: false,
            },
            {
                value: "#7F7F7F",
                isSelected: false,
            },
            {
                value: "#0026F9",
                isSelected: false,
            },
            {
                value: "#49423D",
                isSelected: false,
            },
            {
                value: "#061E42",
                isSelected: false,
            },
            {
                value: "#8926F9",
                isSelected: false,
            },
            {
                value: "#000000",
                isSelected: false,
            },
        ]
    },
    catalogPage: null,
    catalogSortBy: CatalogSortType.price_up,
    catalogViewType: CatalogViewType.grid,
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setCatalogFilter: (state, action: PayloadAction<ICatalogFilter>) => {
            state.catalogFilter = action.payload;
        },
        resetCatalogFilter: (state) => {
            state.catalogFilter = {
                onlyInStock: false,
                categories: {
                    triathlon: {
                        value: false,
                        title: "Велосипеди для тріатлону",
                    },
                    mountain: {
                        value: false,
                        title: "Гірські велосипеди",
                    },
                    city: {
                        value: false,
                        title: "Міські велосипеди",
                    },
                    gravel: {
                        value: false,
                        title: "Гравійні велосипеди",
                    },
                    doubleSuspension: {
                        value: false,
                        title: "Двопідвісні велосипеди",
                    },
                    electric: {
                        value: false,
                        title: "Электровелосипеди",
                    },
                    child: {
                        value: false,
                        title: "Дитячі",
                    }
                },
                price: {
                    min: 0,
                    max: 100000,
                },
                brands: {
                    bianci: {
                        value: false,
                        title: "Bianci",
                    },
                    bmc: {
                        value: false,
                        title: "BMC",
                    },
                    ciclistino: {
                        value: false,
                        title: "Ciclistino",
                    },
                    cipolini: {
                        value: false,
                        title: "Cipollini",
                    },
                    colnago: {
                        value: false,
                        title: "Colnago"
                    },
                    trek: {
                        value: false,
                        title: "Trek"
                    },
                    merida: {
                        value: false,
                        title: "Merida"
                    },
                },
                frameMaterials: {
                    aluminum: {
                        value: false,
                        title: "Алюміній",
                    },
                    carbon: {
                        value: false,
                        title: "Карбон",
                    },
                    steel: {
                        value: false,
                        title: "Сталь",
                    }
                },
                colors: [
                    {
                        value: "#F2F1EF",
                        isSelected: false,
                    },
                    {
                        value: "#38D5C8",
                        isSelected: false,
                    },
                    {
                        value: "#ACB690",
                        isSelected: false,
                    },
                    {
                        value: "#CC7E3B",
                        isSelected: false,
                    },
                    {
                        value: "#740222",
                        isSelected: false,
                    },
                    {
                        value: "#44ACFB",
                        isSelected: false,
                    },
                    {
                        value: "#FEF95F",
                        isSelected: false,
                    },
                    {
                        value: "#0D7F19",
                        isSelected: false,
                    },
                    {
                        value: "#FFD536",
                        isSelected: false,
                    },
                    {
                        value: "#FE7E56",
                        isSelected: false,
                    },
                    {
                        value: "#AC632C",
                        isSelected: false,
                    },
                    {
                        value: "#FD0012",
                        isSelected: false,
                    },
                    {
                        value: "#25FD3C",
                        isSelected: false,
                    },
                    {
                        value: "#353839",
                        isSelected: false,
                    },
                    {
                        value: "#FEA32A",
                        isSelected: false,
                    },
                    {
                        value: "#E5E4E2",
                        isSelected: false,
                    },
                    {
                        value: "#79526F",
                        isSelected: false,
                    },
                    {
                        value: "#FEC0CB",
                        isSelected: false,
                    },
                    {
                        value: "#BDBDBD",
                        isSelected: false,
                    },
                    {
                        value: "#7F7F7F",
                        isSelected: false,
                    },
                    {
                        value: "#0026F9",
                        isSelected: false,
                    },
                    {
                        value: "#49423D",
                        isSelected: false,
                    },
                    {
                        value: "#061E42",
                        isSelected: false,
                    },
                    {
                        value: "#8926F9",
                        isSelected: false,
                    },
                    {
                        value: "#000000",
                        isSelected: false,
                    },
                ]
            }
        },
        setCatalogSortBy: (state, action: PayloadAction<CatalogSortType>) => {
            state.catalogSortBy = action.payload;
        },
        setCatalogViewType: (state, action: PayloadAction<CatalogViewType>) => {
            state.catalogViewType = action.payload;
        },
    },
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
        });
        builder.addCase(getCatalogPage.fulfilled, (state, action) => {
            state.catalogPage = action.payload;
        });
    }
});

export const {
    setCatalogFilter,
    resetCatalogFilter,
    setCatalogSortBy,
    setCatalogViewType,
} = shopSlice.actions;
export default shopSlice.reducer;