import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchMoreCatalogItems, setPage } from '../../redux/slices/catalogSlice'

type MoreCatalogItemsProps = {
    url: string
}

const MoreCatalogItems: React.FC<MoreCatalogItemsProps> = ({url}) => {

    const dispatch = useAppDispatch()
    const {pageState, sortState, catalogTypeState} = useAppSelector(state => state.catalogSlice)

  return (
    <button 
        className="more-catalog-items"

        onClick={() => {
            dispatch(fetchMoreCatalogItems(`https://api.kinopoisk.dev/v1.3/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&sortType=-1&sortField=${sortState.value}&field=type&search=${catalogTypeState}&limit=12&page=${pageState + 1}`))
            dispatch(setPage(pageState + 1))
        }}
    >Ещё</button>
  )
}

export default MoreCatalogItems