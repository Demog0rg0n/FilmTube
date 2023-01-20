import React from 'react'

interface swiperElemProps{
  tittle: string;
  description: string;
  images: string[];
  link: string;
}

const SwiperElem: React.FC<swiperElemProps> = ({tittle, description, images, link}) => {

  return (
      <div className="swiper__elem">
        <div className="swiper__elem__info">
          <h3>{tittle}</h3>
          <p className='swiper__elem__description'>{description}</p>
          <button className="watch-button">
          	<svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg" fill='#e13abd' ><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"/></svg>
            Смотреть
          </button>
          <button className="add-button">
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" alt="" />
            Буду смотреть
          </button>
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