import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { catalogItemProps } from '../../components/catalog/CatalogItem'

export type sortStateType = 
  {name: 'Популярности', value: "votes.imdb"} | 
  {name: 'Рейтингу', value: "rating.kp"} | 
  {name: 'Дате', value: "year&field=year&search=1970-2022&sortField=votes.kp&sortType=-1"};

export type catalogTypeState = "movie" | "cartoon" | "tv-series" | "anime"

type catalogItemsSliceState = {
  catalogItems: catalogItemProps[]
  sortState: sortStateType;
  catalogTypeState: catalogTypeState;
  pageState: number;
  isLoading: boolean;
  pagesCounter: number
}

const initialState: catalogItemsSliceState = {
  catalogItems: [],
  sortState: {name: 'Популярности', value: "votes.imdb"},
  catalogTypeState: "movie",
  pageState: 1,
  isLoading: true,
  pagesCounter: 1,
}

export const fetchCatalogItems = createAsyncThunk("catalogItems/fetchStatus", async (url: string) => {
  const { data } = await axios.get(url)
  return data.docs
})
export const fetchMoreCatalogItems = createAsyncThunk("moreCatalogItems/fetchMoreStatus", async (url: string) => {
  const { data } = await axios.get(url)
  return data.docs
})

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogItems(state, { payload }: PayloadAction<catalogItemProps[]>) {
      state.catalogItems = payload
    },
    setSortState(state, { payload }: PayloadAction<sortStateType>) {
      state.sortState = payload
    },
    setCatalogType(state, { payload }: PayloadAction<catalogTypeState>) {
      state.catalogTypeState = payload
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.pageState = payload
    },
    
  },
  extraReducers(builder) {
    builder.addCase(fetchCatalogItems.fulfilled, (state, { payload }) => {
      state.catalogItems = payload
      state.pagesCounter = payload
      state.isLoading = false
    })
    builder.addCase(fetchCatalogItems.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMoreCatalogItems.fulfilled, (state, { payload }) => {
      state.catalogItems = state.catalogItems.concat(payload)
      state.isLoading = false
    })
  }
})

export const { setCatalogItems, setSortState, setCatalogType, setPage } = catalogSlice.actions

export default catalogSlice.reducer