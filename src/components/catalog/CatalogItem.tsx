import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addToViewed, addToWishList } from '../../redux/slices/userSlice';
import { title } from 'process';

const bookmark = require("../../images/bookmark.png")

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

const CatalogElem: React.FC<catalogItemProps> = memo(function({id, poster, rating, name, alternativeName, year}) {
  
  return (
    <Link to={"/catalog/" + id} className="catalog__item">
        {
          poster?.url &&
            <img src={poster.url} alt="" className="catalog__item__img" />
        }
        <span className="catalog__item__grade">{rating.kp.toFixed(1)}</span>
        <h3 className="catalog__item__title">{name || alternativeName + ` (${year})`}</h3>
    </Link>
  )
})

export default CatalogElem