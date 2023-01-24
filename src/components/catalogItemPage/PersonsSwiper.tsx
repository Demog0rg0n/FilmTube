import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import { Navigation, Mousewheel, Pagination } from 'swiper'

type PersonsSwiperProps = {
    persons: {
        name: string;
        photo: string;
        enProfession: string;
    }[]
}

function getSlidesPerView() {
    const width = window.screen.width
    if(width > 1060) {
        return 4
    }
    if(width <= 1060 && width > 900) {
        return 3
    }
    if(width <= 900 && width >= 800) {
        return 2
    }
    if(width <= 800 && width >= 660) {
        return 4
    }
    if(width <= 660 && width >= 500) {
        return 3
    }
    if(width <= 500) {
        return 2
    }
}

const PersonsSwiper: React.FC<PersonsSwiperProps> = ({persons}) => {

  return (
    <>
    <h3>Актёры</h3>
    <Swiper
        className="persons-swiper"
        direction='horizontal'
        slidesPerView={getSlidesPerView()}
        spaceBetween={30}
        modules={[Navigation, Mousewheel, Pagination]}
        navigation
        mousewheel
    >
        {
        persons.map((person, index) => (
            <SwiperSlide key={index}>
                <div className="persons-swiper__slide">
                    <img src={person.photo} alt="" />
                    <div>{person.name}</div>
                </div>
            </SwiperSlide>
        ))
        }
    </Swiper>
    </>
    
  )
}

export default PersonsSwiper