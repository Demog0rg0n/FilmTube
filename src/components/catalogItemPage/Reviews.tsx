import axios from 'axios'
import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommentsSwiperSlide from './ReviewsSwiperSlide';
import FullReviews from './FullReviews';

type CommentsProps = {
    movieId: number;
}

export type commentType = {
    author: string;
    review: string;
    type: string;
    title: string;
    date: string;
    id: number;
}

const Reviews: React.FC<CommentsProps> = ({movieId}) => {

    const [reviews, setReviews] = React.useState<commentType[]>([])
    const [reviewsFull, setReviewsFull] = React.useState(false)


    React.useEffect(() => {
        async function fetchReviews() {
            const { data } = await axios.get(`https://api.kinopoisk.dev/v1/review?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=movieId&search=${movieId}`)
            setReviews(data.docs)
        }

        fetchReviews()
    }, [movieId])

  return (
    <section className="reviews">
        <div className="reviews__container container">
            <h2 className="reviews__title">Рецензии</h2>
            <Swiper
                className="reviews-swiper"
                slidesPerView={1}
                spaceBetween={10}

                breakpoints={{
                    620: {
                        slidesPerView: 2
                    },
                    1080: {
                        slidesPerView: 3
                    },
                }}
            >
                { 
                    reviews.map(review => (
                        <SwiperSlide key={review.id} onClick={() => setReviewsFull(true)}>
                            <div className="review">
                                <div className="review__header">
                                    <h3 className="review__author">{review.author}</h3>
                                    <span className="review__date">{review.date.slice(0, 10).replaceAll("-", ".")}</span>
                                </div>
                                <h4 className="review__title">{review.title}</h4>

                                <div className="review__text">{review.review}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        {reviewsFull &&
            <FullReviews reviews={reviews} setReviewsFull={setReviewsFull}/>
        }
    </section>
  )
}

export default Reviews