import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuOpened: false,
    popupOpened: false,
    popupType: false,
}

export const headerSlice = createSlice({
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
        },
        openPopup(state) {
            state.popupOpened = true
            const $body = document.getElementsByTagName("body")[0]
            $body.style.overflow = "hidden"
        },
        closePopup(state) {
            state.popupOpened = false
            const $body = document.getElementsByTagName("body")[0]
            $body.style.overflow = "initial"
        },
        setPopupType(state) {
            state.popupType = !state.popupType
        }
    }
})

export const { setMenuState, closeMenu, openPopup, closePopup, setPopupType } = headerSlice.actions

export default headerSlice.reducer