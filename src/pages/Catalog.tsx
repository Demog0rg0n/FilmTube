import React from 'react'

import { fetchCatalogItems } from '../redux/slices/catalogSlice'

import { useAppDispatch, useAppSelector } from '../redux/store'

import CatalogItems from '../components/catalog/CatalogItems'
import Pagination from '../components/catalog/Pagination'
import CatalogNav from '../components/catalog/CatalogNav'
import Sort from '../components/catalog/Sort'

const Catalog: React.FC = () =>  {

  const { catalogItems, sortState, catalogTypeState, pageState, isLoading } = useAppSelector(state => state.catalogSlice)

  const dispatch = useAppDispatch()

  React.useEffect(() =>  {
    const url = `https://api.kinopoisk.dev/v1.3/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&sortType=-1&sortField=${sortState.value}&field=type&search=${catalogTypeState}&limit=12&page=${pageState}`
    dispatch(fetchCatalogItems(url))
  }, [sortState, catalogTypeState, pageState, dispatch])

  return (
    // <main className='catalog'>
    //   <div className="catalog__content container">
    //     <CatalogNav />
    //     <Sort />
    //     <CatalogItems catalogItems={catalogItems} isLoading={isLoading}/>
    //     <Pagination />
    //   </div> 
    // </main>
    <section className="catalog">
        <div className="catalog__container container">
            <div className="catalog__header">
              <Sort />
            </div>

            <CatalogItems catalogItems={catalogItems} isLoading={isLoading}/>
        </div>
    </section>
  )
}

export default Catalog