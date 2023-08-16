import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'

import { Navigation, Mousewheel, Pagination } from 'swiper'

import 'swiper/css/bundle'
import WatchButton from '../../WatchButton'
import { catalogItemProps } from '../../catalog/CatalogItem'

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
        navigation
        mousewheel
        pagination
    >
        {
            props.items &&
            props.items.map((item,index) => (
                <SwiperSlide key={index}>
                    <div className="top10-swiper__elem">
                        <img src={item.poster?.url} alt="" className="top10-swiper__elem__img" />
                        <div className="top10-swiper__elem__info">
                            <h3 className="top10-swiper__elem__tittle">{item.name}</h3>
                            <h4 className='alternativeName'>{item.alternativeName}</h4>
                            <WatchButton link={"/catalog/" + item.id} additionalClass='top10-swiper__button'/>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        } 
    </Swiper>
    
  )
}

export default Top10Swiper