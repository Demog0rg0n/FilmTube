
import React from 'react'
import { commentType } from './Reviews'
import FullReview from './FullReview'
import close from '../../images/close.svg'


type FullReviewsProps = {
    reviews: commentType[]
    setReviewsFull: (arg: boolean) => void
}

const FullReviews: React.FC<FullReviewsProps> = ({reviews, setReviewsFull}) => {

    function closeReviews() {
        setReviewsFull(false)
        document.body.classList.remove("overflow-hidden")
    }

  return (
    <div className="full-reviews__wrapper">
        <div className="full-reviews">
            <div className="full-reviews__items">
                {
                    reviews.map(review => (
                        <FullReview review={review} key={review.id}/>
                    ))
                }
                <svg 
                    height="512px" 
                    version="1.1" 
                    viewBox="0 0 512 512" 
                    width="512px" 
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="full-reviews__close" onClick={() => closeReviews()}
                    fill='#FFF'
                >
                    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default FullReviews