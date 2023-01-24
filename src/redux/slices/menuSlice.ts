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
            if(state.menuOpened) {
                const $body = document.getElementsByTagName("body")[0]
                $body.style.overflow = "hidden"
            } else {
                const $body = document.getElementsByTagName("body")[0]
                $body.style.overflow = "initial"
            }
        },
        closeMenu(state) {
            state.menuOpened = false
            const $body = document.getElementsByTagName("body")[0]
            $body.style.overflow = "initial"
        }
    }
})

export const { setMenuState, closeMenu } = menuSlice.actions

export default menuSlice.reducer