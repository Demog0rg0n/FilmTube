import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchName: "",
    searchItems: [],
    mobileSearchState: false,
}

export const fetchSearchItems = createAsyncThunk("searchItems/searchStatus", async (name: string) => {
    try{
        const {data} = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=name&search=${name}&sortField=votes.imdb&sortType=-1&limit=6`)

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
        setMobileSearchState(state, { payload }: PayloadAction<boolean>) {
            state.mobileSearchState = payload
        },
        setSearchItems(state, { payload }: PayloadAction<[]>) {
            state.searchItems = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchItems.fulfilled, (state, { payload }) => {
            state.searchItems = payload
        })
    }
})

export const { setSearchName, setMobileSearchState, setSearchItems } = searchSlice.actions

export default searchSlice.reducer