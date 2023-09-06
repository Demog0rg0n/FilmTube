import React from 'react'

import '../../styles/catalog.scss'

import CatalogItem, { catalogItemProps } from './CatalogItem'
import CatalogItemLoader from './CatalogItemLoader'

interface catalogItemsProps {
  catalogItems: catalogItemProps[]
  isLoading: boolean;
  moreIsLoading: boolean;
}

const CatalogItems: React.FC<catalogItemsProps> = ({catalogItems, isLoading, moreIsLoading}) => {

  return (
    <div className='catalog__items'>
      {
        isLoading && [...new Array(12)].map((item, i) => (
          <div key={i} className="catalog__item catalog__item-loader"></div>
        ))
      }
      {
        catalogItems.map(item => (
          <CatalogItem {...item} key={item.id}/>
        ))
      }
      {
        moreIsLoading && [...new Array(12)].map((item, i) => (
          <div key={i} className="catalog__item catalog__item-loader"></div>
        ))

      }
    </div>
  )
}

export default CatalogItems