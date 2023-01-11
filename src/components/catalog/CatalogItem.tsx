import React from 'react'
import { Link } from 'react-router-dom';

export interface catalogItemProps {
  name: string;
  id: number
  alternativeName: string;
  poster: {url: string};
  year: number;
  movieLength: number;
  shortDescription: string;
  description: string;
  rating: {
    kp:number,
    imdb:number,
  }
}

const CatalogElem: React.FC<catalogItemProps> = (catalogItem) => {
  return (

    <div className='catalog-item'>
      <div className="catalog-item__img">
        <img src={catalogItem.poster?.url || ""} alt="" />
      </div>
      <div className="catalog-item__info">
        <h2 className='catalog-item__info__title'>{catalogItem.name || catalogItem.alternativeName}</h2>
        <div className="catalog-item__info__elem">Год: {catalogItem.year}</div>
        <div className="catalog-item__info__elem">Время: {catalogItem.movieLength || "?"} мин.</div>
        <div className="catalog-item__info__description">Описание: {catalogItem.shortDescription || catalogItem.description}</div>
        <Link to={`./${catalogItem.id}`} className="watch-button">Перейти</Link>
        <div className="catalog-item__info__rating">{catalogItem.rating.kp.toFixed(1)}</div>
      </div>
    </div>
    
  )
}

export default CatalogElem