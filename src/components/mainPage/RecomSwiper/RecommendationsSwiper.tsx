import React from 'react'

import SwiperElem from './SwiperElem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import slide1Img from '../../../images/slide1.jpg'
import slide2Img from '../../../images/slide2.jpg'
import slide3Img from '../../../images/slide3.jpg'

import 'swiper/css/bundle'

const RecommendationsSwiper:React.FC = () => {
  const slide1 = {
    title: "Звёздные войны: Эпизод 1 — Скрытая угроза",
    image: slide1Img,
    link: "/catalog/6695",
  }
  const slide2 = {
    title: "Властелин Колец",
    image: slide2Img,
    link: "/catalog/328",
  }
  const slide3 = {
    title: "Гарри Поттер и философский камень",
    image: slide3Img,
    link: "/catalog/689",
  }

  return (
    <div className="swipers__block">
      <h2 className="swiper-title">Рекомендации</h2>
      <Swiper
        className="recomendations-swiper"
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000
        }}
        loop
      >
        <SwiperSlide>
          <SwiperElem {...slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperElem {...slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperElem {...slide3} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default RecommendationsSwiper