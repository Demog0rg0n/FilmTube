import React from 'react'

import '../../styles/catalog.scss'

import CatalogItem, { catalogItemProps } from './CatalogItem'
import CatalogItemLoader from './CatalogItemLoader'

interface catalogItemsProps {
  catalogItems: catalogItemProps[]
  isLoading: boolean;
}

const CatalogItems: React.FC<catalogItemsProps> = ({catalogItems, isLoading}) => {

  return (
    <div className='catalog-items'>
      {
        isLoading? [...new Array(15)].map((item, i) => (
          <CatalogItemLoader key={i}/>
        )):
        catalogItems.map(item => (
          <CatalogItem {...item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default CatalogItems