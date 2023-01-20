import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'

import { Navigation, Mousewheel, Pagination } from 'swiper'

import 'swiper/css/bundle'
import { Link } from 'react-router-dom'

const Top10Swiper = () => {
  return (
    <Swiper
        className="top10-swiper"
        direction='vertical'
        slidesPerView={1}
        modules={[Navigation, Mousewheel, Pagination]}
        navigation
        mousewheel
        pagination
    >
        {
            [...new Array(10)].map(() => (
                <SwiperSlide>
                    <div className="top10-swiper__elem">
                        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450" alt="" className="top10-swiper__elem__img" />
                        <div className="top10-swiper__elem__info">
                            <h3 className="top10-swiper__elem__tittle">Зелёная миля</h3>
                            <div className="top10-swiper__elem__info__country">Страна: США</div>
                            <div className="top10-swiper__elem__info__genre">Жанр: Драмма</div>
                            <div className="top10-swiper__elem__info__stage-director">Режиссёр: Фрэнк Дарабонт</div>
                            <div className="top10-swiper__elem__info__roles">Том Хэнкс, Дэвид Морс, Майкл Кларк Дункан</div>
                            <Link to={"/catalog/movie/435"} className="watch-button">Перейти</Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        } 
    </Swiper>
    
  )
}

export default Top10Swiper