import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpened: false
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenuState(state) {
            state.menuOpened = !state.menuOpened
        }
    }
})

export const { setMenuState } = menuSlice.actions

export default menuSlice.reducer