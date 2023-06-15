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

  function fetchToWishList(id: Number){
    if(user) {
      dispatch(addToWishList(id))
    }
  }
  function fetchToViewed(id: Number){
    if(user) {
      dispatch(addToViewed(id))
    }
  }


  return (
    <div className='catalog-item'>
      <Link to={`./${id}`}>
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
      { (!user?.user_viewed.includes(id) || !user?.user_wish_list.includes(id)) &&
        <div className="add-to-lists">
          <div className="add-to-lists__icon">
            <img src={bookmark} alt="" className="add-to-lists__icon" />
          </div>
        
          <div className="add-to-lists__items">
            {
              !user?.user_viewed.includes(id) && <div onClick={() => fetchToViewed(id)} className="add-to-lists__item">Просмотренное</div>
            }
            {
              !user?.user_wish_list.includes(id) && <div onClick={() => fetchToWishList(id)} className="add-to-lists__item">Буду смотреть</div>
            }
          </div>
        </div>
      }
    </div>
    
  )
}

export default CatalogElem