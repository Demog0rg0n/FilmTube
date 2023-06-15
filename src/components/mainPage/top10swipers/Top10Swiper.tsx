import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'

import { Navigation, Mousewheel, Pagination } from 'swiper'

import 'swiper/css/bundle'
import WatchButton from '../../WatchButton'

const Top10Swiper: React.FC = () => {
  return (
    <Swiper
        className="top10-swiper"
        direction='horizontal'
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
                            <h4 className='alternativeName'>The Green Mile</h4>
                            <WatchButton additionalClass='top10-swiper__button'/>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        } 
    </Swiper>
    
  )
}

export default Top10Swiper