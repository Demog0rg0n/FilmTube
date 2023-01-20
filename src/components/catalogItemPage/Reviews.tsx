import axios from 'axios'
import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommentsSwiperSlide from './ReviewsSwiperSlide';

type CommentsProps = {
    movieId: number;
}

export type commentType = {
    author: string;
    review: string;
    id: number;
}

const Reviews: React.FC<CommentsProps> = ({movieId}) => {

    const [reviews, setReviews] = React.useState<commentType[]>([])

    React.useEffect(() => {
        async function fetchReviews() {
            const { data } = await axios.get(`https://api.kinopoisk.dev/review?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=movieId&search=${movieId}`)
            setReviews(data.docs)
        }

        fetchReviews()
    }, [movieId])

  return (
    <>
        <div className="reviews">
            <h3>Рецензии</h3>
            <Swiper
                className="review-swiper"
                slidesPerView={window.screen.width > 1070? 2: 1}
                modules={[Navigation]}
                navigation
                spaceBetween={30}
            >
                { 
                    reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <CommentsSwiperSlide key={review.id} {...review} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
        </div>
    </>
    
    
  )
}

export default Reviews