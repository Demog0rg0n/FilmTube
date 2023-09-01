import React from 'react'
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

const CatalogElem: React.FC<catalogItemProps> = ({id, poster, rating, name, year, description}) => {
  const [descriptionState, setDescriptionState] = React.useState(false)

  const user = useAppSelector(state => state.userSlice.user)
  const dispatch = useAppDispatch()

  function fetchToWishList(id: { id: number; poster: { url: string; }; title: string; }){
    if(user) {
      dispatch(addToWishList(id))
    }
  }
  function fetchToViewed(id: { id: number; poster: { url: string; }; title: string; }){
    if(user) {
      dispatch(addToViewed(id))
    }
  }

  function checkViewed(id: number) {

    let inViewed = false
    if(user) {

      const viewed = user?.user_viewed

      for(let i = 0; i < viewed.length; i++) {
        if(viewed[i].id === id) {
          inViewed = true
          i = viewed.length
        }
      }
    }
    return inViewed
  }
  function checkWishList(id:number) {

    let inWishList = false

    if(user) {

      const wishList = user?.user_wish_list

      for(let i = 0; i < wishList.length; i++) {
        if(wishList[i].id === id) {
          inWishList = true
          i = wishList.length
        }
      }
    }
    
    return inWishList
  }

  const viewedItem = {
    id,
    poster,
    title: name
  }

  let inViewed = checkViewed(id)
  let inWishList = checkWishList(id)
  
  return (
    <Link to={"/catalog/" + id} className="catalog__item">
        {
          poster?.url &&
            <img src={poster.url} alt="" className="catalog__item__img" />
        }
        <span className="catalog__item__grade">{rating.kp}</span>
        <h3 className="catalog__item__title">{name + ` (${year})`}</h3>
    </Link>
  )
}

export default CatalogElem