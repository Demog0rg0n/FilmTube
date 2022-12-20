import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchName: "",
    searchItems: []
}

export const fetchSearchItems = createAsyncThunk("searchItems/searchStatus", async (name: string) => {
    try{
        const {data} = await axios.get(`https://api.kinopoisk.dev/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=name&search=${name}&sortField=votes.imdb&sortType=-1&limit=6`)

        return data.docs
    } catch(e) {
        console.log(e)
    }
    
})

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchName(state, { payload }: PayloadAction<string>) {
            state.searchName = payload
        },
        setSearchItems(state, { payload }) {
            state.searchItems = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchItems.fulfilled, (state, { payload }) => {
            state.searchItems = payload
        })
    }
})

export const { setSearchName } = searchSlice.actions

export default searchSlice.reducer