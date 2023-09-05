import React from 'react'
import { commentType } from './Reviews'

type FullReviewProps = {
    review: commentType
}

const FullReview: React.FC<FullReviewProps> = ({review}) => {

    const [reviewState, setReviewState] = React.useState(false)

  return (
    <div className={reviewState? "full-review opened": "full-review"}>
        <div className="full-review__header">
            <h3 className="full-review__author">{review.author}</h3>
            <span className="full-review__date">{review.date.slice(0, 10).replaceAll("-", ".")}</span>
        </div>
        <h4 className="full-review__title">{review.title}</h4>

        <div className="full-review__text">{review.review}</div>

        <button className="full-review__button" onClick={() => setReviewState((prev) => !prev)}>
            {
                reviewState? "Скрыть": "Раскрыть"
            }
        </button>
    </div>
  )
}

export default FullReview