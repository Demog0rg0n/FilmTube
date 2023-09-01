import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import catalogSlice from './slices/catalogSlice'
import searchSlice from './slices/searchSlice'
import headerSlice from './slices/headerSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    catalogSlice,
    searchSlice,
    headerSlice,
    userSlice,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store