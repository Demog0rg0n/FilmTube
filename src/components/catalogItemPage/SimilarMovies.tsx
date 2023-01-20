import React from 'react'

import { Link } from 'react-router-dom';
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface similarMoviesProps {
    similarMovies: {
        name: string;
        id: number;
        poster: {
            url: string;
        }
    }[]
}

function getSlidesPerView() {
    const screenWidth = window.screen.width - 30

    const slidesCount = Math.floor(screenWidth / 210) 

    if(slidesCount > 5) {
        return 5
    } else {
        return slidesCount
    }
}

const SimilarMovies: React.FC<similarMoviesProps> = ({similarMovies}) => {
  return (
    <div className="similar-movies__wrapper">
        <div className="similar-movies">
            <h3>Смотрите также</h3>
            <Swiper
                className="similar-movies__swiper"
                slidesPerView={getSlidesPerView()}
                modules={[Navigation, Mousewheel]}
                spaceBetween={10}
                navigation
                mousewheel
            >
                {
                    similarMovies.map((similarMovie) => (
                        <SwiperSlide key={similarMovie.id}>
                            <Link onClick={() => window.scrollTo(0, 0)} to={`./../${similarMovie.id}`}>
                                <div className="similar-movies__swiper__element">
                                    <img src={similarMovie.poster.url} alt="" />
                                    <h4>{similarMovie.name}</h4>
                                </div>
                            </Link>
                            
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
        </div>
    </div>
    
  )
}

export default SimilarMovies