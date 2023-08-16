import React from 'react'
import WatchButton from '../../WatchButton';

interface swiperElemProps{
  tittle: string;
  description: string;
  images: string[];
  link: string;
}

const SwiperElem: React.FC<swiperElemProps> = ({tittle, images, link}) => {

  return (
      <div className="swiper__elem">
        <div className="swiper__elem__info">
          <h4>{tittle}</h4>
          <WatchButton link={link} additionalClass='recommendations-swiper__button'/>
        </div>
        <div className="swiper__elem__images">
          <div className="swiper__elem__images__content">
            <div className="swiper__elem__img">
              <img src={images[0]} alt="" />
            </div>
            <div className="swiper__elem__img">
              <img src={images[1]} alt="" />
            </div>
            <div className="swiper__elem__img">
              <img src={images[2]} alt="" />
            </div>
          </div>
          
        </div>
      </div>
  )


}

export default SwiperElem