import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuItems: ["gifs", "Nonononoyes", "ReverseAnimalRescue", "NatureIsFuckingLit", "Instant_regret"]
};

export const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const {item} = action.payload;
            state.menuItems.push(item)
        }
    }
})

export const { addItem } = menuSlice.actions;

export const selectMenuItem = state => state.menu.menuItems;

export const menuReducer = menuSlice.reducer;