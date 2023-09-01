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

const PersonsSwiper: React.FC<PersonsSwiperProps> = ({persons}) => {

  return (
    <>
    <h3>Актёры</h3>
    <Swiper
        className="persons-swiper"
        direction='horizontal'
        slidesPerView={"auto"}
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