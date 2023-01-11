import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import catalogSlice from './slices/catalogSlice'
import searchSlice from './slices/searchSlice'
import menuSlice from './slices/menuSlice'

export const store = configureStore({
  reducer: {
    catalogSlice,
    searchSlice,
    menuSlice,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store