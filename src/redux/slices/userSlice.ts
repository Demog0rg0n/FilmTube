import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type userSliceType = {
    user: {
        user_id:  Number,
        user_name: String,
        user_email:String,
        user_password: String,
        user_viewed: Number[],
        user_wish_list: Number[],
        user_subscription: Boolean,
    } | null
}



const initialState:userSliceType = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            state.user = payload
        },
        addToWishList(state, { payload }) {
            state.user?.user_wish_list.push(payload)
            axios.put("http://localhost:5000/api/user", state.user)
        },
        addToViewed(state, { payload }) {
            state.user?.user_viewed.push(payload)
            axios.put("http://localhost:5000/api/user", state.user)
        }
    }
})

export const { setUser, addToWishList, addToViewed } = userSlice.actions

export default userSlice.reducer