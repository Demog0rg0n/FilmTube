
import React from 'react'
import { commentType } from './Reviews'
import FullReview from './FullReview'
import close from '../../images/close.svg'


type FullReviewsProps = {
    reviews: commentType[]
    setReviewsFull: (arg: boolean) => void
}

const FullReviews: React.FC<FullReviewsProps> = ({reviews, setReviewsFull}) => {

  return (
    <div className="full-reviews__wrapper">
        <div className="full-reviews">
            {
                reviews.map(review => (
                    <FullReview review={review} />
                ))
            }
            <img src={close} alt="" className="full-reviews__close" onClick={() => setReviewsFull(false)}/>
        </div>
    </div>
  )
}

export default FullReviews