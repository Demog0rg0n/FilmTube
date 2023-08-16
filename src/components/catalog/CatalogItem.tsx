import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addToViewed, addToWishList } from '../../redux/slices/userSlice';

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

  function fetchToWishList(id){
    if(user) {
      dispatch(addToWishList(id))
    }
  }
  function fetchToViewed(id){
    if(user) {
      dispatch(addToViewed(id))
    }
  }

  function checkViewed(id) {

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
  function checkWishList(id) {

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
    <div className='catalog-item'>
      <Link to={`/catalog/${id}`}>
        <img className='catalog-item__img' src={poster?.url || ""} alt="" />
        <div className="catalog-item__info">
          <div className="catalog-item__info__rating">{rating.kp.toFixed(1)}</div>
          <h2 className="catalog-item__info__title">{`${name} (${year})`}</h2>
        </div>
        <div className={`catalog-item__info__description ${ descriptionState && "catalog-item__info__description_opened"}`}>
          <span className='catalog-item__info__description__title'>Описание:</span><br/> {description}
        </div>
      </Link>
      <div className={`catalog-item__info__rating description-button ${descriptionState && "description-button_active"}`} onClick={(event) => {
        setDescriptionState(prev => !prev)
        }}>i
      </div>
        <div className="add-to-lists">
          <div className="add-to-lists__icon">
            <img src={bookmark} alt="" className="add-to-lists__icon" />
          </div>
        { user &&
          <div className="add-to-lists__items">
            {
              !inViewed && <div onClick={() => fetchToViewed(viewedItem)} className="add-to-lists__item">Просмотренное</div>
            }
            {
              !inWishList && <div onClick={() => fetchToWishList(viewedItem)} className="add-to-lists__item">Буду смотреть</div>
            }
          </div>
        }
        </div>
    </div>
    
  )
}

export default CatalogElem