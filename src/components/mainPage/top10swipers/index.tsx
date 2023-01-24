import React from 'react'

import Top10Swiper from './Top10Swiper'

const index:React.FC = () => {
  return (
    <div className="top10-swipers">
      <div className="top10-swiper__container">
        <h2 className="top10-swiper__title">Топ 10 фильмов</h2>
        <Top10Swiper />
      </div>
      <div className="top10-swiper__container">
        <h2 className="top10-swiper__title">Топ 10 Сериалов</h2>
        <Top10Swiper />
      </div>
    </div>
  )
}

export default index