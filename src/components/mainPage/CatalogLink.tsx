import React from 'react'
import { Link } from 'react-router-dom'

const CatalogLink = () => {
  return (
    <div className="catalog-link">
        <div className="catalog-link__content">
            <h2 className="catalog-link__content__tittle">Каталог</h2>
            <Link to={"/catalog/movies"} className="catalog-link__content__button">Перейти</Link>
        </div>
        <img src="https://killer-antiplagiat.ru/ArticlesFiles/7405c331-1c64-4bed-b923-b99915466e20.jpg" alt="" className="catalog-link__img" />
    </div>
  )
}

export default CatalogLink