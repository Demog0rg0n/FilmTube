import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'

import { Navigation, Mousewheel, Pagination } from 'swiper'

import 'swiper/css/bundle'
import WatchButton from '../../WatchButton'
import { catalogItemProps } from '../../catalog/CatalogItem'
import { Link } from 'react-router-dom'

type top10SwiperProps = {
    items :catalogItemProps[]
}

const Top10Swiper: React.FC<top10SwiperProps> = (props) => {

    console.log(props.items)

  return (
    <Swiper
        className="top10-swiper"
        direction='horizontal'
        slidesPerView={1}
        modules={[Navigation, Mousewheel, Pagination]}
        mousewheel
    >
        {
            props.items &&
            props.items.map((item,index) => (
                <SwiperSlide key={index}>
                    <div className="top10-item">
                        <img src={item.poster?.url} alt="" className="top10-item__img"/>
                        <div className="top10-item__text">
                            <div className="top10-item__titles">
                                <h3 className="top10-item__title">{item.name}</h3>
                                <span className="top10-item__alternative-title">{item.alternativeName}</span>
                            </div>

                            <Link to={"/catalog/" + item.id} className="button">Смотреть</Link>
                        </div>
                    </div>
                </SwiperSlide>
                    
            ))
        } 
    </Swiper>
    
  )
}

export default Top10Swiper