import React from 'react'
import { SwiperSlide } from 'swiper/react'

export type commentType = {
    author: string;
    review: string;
}

const CommentsSwiperSlide: React.FC<commentType> = (comment) => {

    const [reviewState, setReviewState] = React.useState(false)

    return (
        <div className="reviews__elem">
            <h4 className="reviews__elem__name">{comment.author}</h4>
            <p className={`reviews__elem__value ${reviewState && "isDisclosed"}`}>{comment.review}</p>
            <span 
                className="disclosure-button"
                onClick={() => setReviewState((prev) => !prev)}>
                {!reviewState? "Раскрыть": "Скрыть"}
                </span>
                
        </div>
  )
}

export default CommentsSwiperSlide