import React from 'react'
import { Link } from 'react-router-dom';

interface swiperElemProps{
  title: string;
  image: string;
  link: string;
}

const SwiperElem: React.FC<swiperElemProps> = ({title, image, link}) => {

  return (
    <div className="recomendation__item">
        <img src={image} alt="" className="recomendation__image"/>
        <h3 className="recomentdation__item__title">{title}</h3>
        <Link to={link} className="recomendations__button button">Смотреть</Link>
    </div>
  )


}

export default SwiperElem