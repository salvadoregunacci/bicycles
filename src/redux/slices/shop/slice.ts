import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICatalogFilter, IShopItem, IShopState} from "../../../types.ts";
import {CatalogSortType, CatalogViewType} from "../../../enums.ts";
import {
    getBestItems,
    getCatalogPage,
    getCategories,
    getItemFullInfo,
    getNewItems,
    getOutfitItems,
    getReviews,
    getCartSimilarItems,
} from "./asyncThunks.ts";
import {cartItems} from "../../../data_mocup/cartItems.ts";


const defaultCatalogState = {
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
    ],
}

const initialState: IShopState = {
    currency: "\u{20B4}",
    bestItems: null,
    newItems: null,
    categories: null,
    outfitItems: null,
    reviews: null,
    oneClickItem: null,
    catalogFilter: defaultCatalogState,
    catalogPage: null,
    catalogSortBy: CatalogSortType.price_up,
    catalogViewType: CatalogViewType.grid,
    itemFullInfo: null,
    cartItems: cartItems,
    cartSimilarItems: null,
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setCatalogFilter: (state, action: PayloadAction<ICatalogFilter>) => {
            state.catalogFilter = action.payload;
        },
        resetCatalogFilter: (state) => {
            state.catalogFilter = defaultCatalogState;
        },
        setCatalogSortBy: (state, action: PayloadAction<CatalogSortType>) => {
            state.catalogSortBy = action.payload;
        },
        setCatalogViewType: (state, action: PayloadAction<CatalogViewType>) => {
            state.catalogViewType = action.payload;
        },
        setOneClickItem: (state, action: PayloadAction<IShopItem | null>) => {
            state.oneClickItem = action.payload;
        },
        removeCartItem: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        changeCartItemCount: (state, action: PayloadAction<{ itemID: number, count: number }>) => {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload.itemID) {
                    return {
                        ...item,
                        count: action.payload.count,
                    }
                }

                return item;
            })
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
        builder.addCase(getItemFullInfo.fulfilled, (state, action) => {
            state.itemFullInfo = action.payload;
        });
        builder.addCase(getCartSimilarItems.fulfilled, (state, action) => {
            state.cartSimilarItems = action.payload;
        });
    }
});

export const {
    setCatalogFilter,
    resetCatalogFilter,
    setCatalogSortBy,
    setCatalogViewType,
    setOneClickItem,
    removeCartItem,
    changeCartItemCount,
    clearCart,
} = shopSlice.actions;
export default shopSlice.reducer;