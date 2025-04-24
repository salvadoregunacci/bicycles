import {createSlice} from "@reduxjs/toolkit";
import {IContacts} from "../../types.ts";

type State = {
    isOpenMenu: boolean,
    contacts: IContacts,
}

const initialState: State = {
    isOpenMenu: false,
    contacts: {
        telephone: "+38 099-56-75-885",
        address: {
            city: "м.Київ",
            street1: "вул.Алмазова",
            street2: "буд.45",
        },
        email: "worldbikes@gmail.com",
        workTime: {
            start: "10:00",
            end: "20:00",
        },
    },
}

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {}
});

export const {} = generalSlice.actions;
export default generalSlice.reducer;