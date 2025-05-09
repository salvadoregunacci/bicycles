import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeliveryErrors, DeliveryMethod, IOrderState, PayMethod} from "../../../types.ts";

const initialState: IOrderState = {
    firstname: "",
    lastname: "",
    telephone: "",
    email: "",
    address: "",
    searchCity: "",
    selectedCity: "",
    cityList: [],
    searchWarehouse: "",
    selectedWarehouse: "",
    warehouseList: [],
    deliveryMethod: "novaposhta",
    payMethod: "receipt",
    deliveryErrors: {},
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setFirstname: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.firstname;
            state.firstname = action.payload;
        },
        setLastname: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.lastname;
            state.lastname = action.payload;
        },
        setTelephone: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.telephone;
            state.telephone = action.payload;
        },
        setEmail: (state, action:PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAddress: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.address;
            state.address = action.payload;
        },
        setSearchCity: (state, action:PayloadAction<string>) => {
            state.searchCity = action.payload;
        },
        setSelectedCity: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.selectedCity;
            state.selectedCity = action.payload;
        },
        setCityList: (state, action:PayloadAction<string[]>) => {
            state.cityList = action.payload;
        },
        setSearchWarehouse: (state, action:PayloadAction<string>) => {
            state.searchWarehouse = action.payload;
        },
        setSelectedWarehouse: (state, action:PayloadAction<string>) => {
            delete state.deliveryErrors.selectedWarehouse;
            state.selectedWarehouse = action.payload;
        },
        setWarehouseList: (state, action:PayloadAction<string[]>) => {
            state.warehouseList = action.payload;
        },
        setDeliveryMethod: (state, action:PayloadAction<DeliveryMethod>) => {
            delete state.deliveryErrors.address;
            state.deliveryMethod = action.payload;
        },
        setPayMethod: (state, action:PayloadAction<PayMethod>) => {
            state.payMethod = action.payload;
        },
        setDeliveryErrors: (state, action:PayloadAction<DeliveryErrors>) => {
            state.deliveryErrors = action.payload;
        },
        resetOrder: (state) => {
            state.deliveryErrors = {};
            state.firstname = "";
            state.lastname = "";
            state.address = "";
            state.telephone = "";
            state.email = "";
            state.selectedCity = "";
            state.selectedWarehouse = "";
            state.deliveryMethod = "novaposhta";
            state.payMethod = "receipt";
        },
    }
});

export const {
    setFirstname,
    setLastname,
    setTelephone,
    setEmail,
    setAddress,
    setSearchCity,
    setSelectedCity,
    setCityList,
    setSearchWarehouse,
    setSelectedWarehouse,
    setWarehouseList,
    setDeliveryMethod,
    setPayMethod,
    setDeliveryErrors,
    resetOrder,
} = orderSlice.actions;
export default orderSlice.reducer;