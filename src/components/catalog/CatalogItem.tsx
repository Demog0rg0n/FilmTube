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

const CatalogElem: React.FC<catalogItemProps> = ({id, poster, rating, name, year, description}) => {
  const [descriptionState, setDescriptionState] = React.useState(false)
  return (
    <div className='catalog-item'>
      <Link to={`./${id}`}>
        <img className='catalog-item__img' src={poster?.url || ""} alt="" />
        <div className="catalog-item__info">
          <div className="catalog-item__info__rating">{rating.kp.toFixed(1)}</div>
          <h2 className="catalog-item__info__title">{`${name} (${year})`}</h2>
        </div>
        <div className={`catalog-item__info__description ${ descriptionState && "catalog-item__info__description_opened"}`}>Описание:<br/> {description}</div>
      </Link>
      <div className={`catalog-item__info__rating description-button ${descriptionState && "description-button_active"}`} onClick={(event) => {
        setDescriptionState(prev => !prev)
        }}>i
      </div>
    </div>
    
  )
}

export default CatalogElem