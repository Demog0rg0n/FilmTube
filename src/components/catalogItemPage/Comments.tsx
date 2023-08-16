import axios from 'axios'
import React from 'react'

import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../redux/store'

type commentsType = {
    
}[]


const Comments = (filmId) => {

    const [] = React.useState()

    const user = useAppSelector(state => state.userSlice.user)

    const [items, setItems] = React.useState([])

    async function fetchComments(filmId) {

        const { data } = await axios.get(`http://localhost:5000/api/review/${filmId}`)

        setItems(data)
    }

    React.useEffect(() => {
        fetchComments(filmId)
    })



  return (
    <div className="comments">
        {
            user? 
            <div className="comments__input-wrapper">
                <textarea name="comment-text" id="comment-text" cols={30} rows={10}></textarea>
            </div>:
            <h3 className="">Чтобы оставить комментарий нужно войти в аккаунт</h3>
        }
        <Swiper
            className="comments__name"
            slidesPerView={3}
            modules={[Navigation, Mousewheel]}
            spaceBetween={30}
            navigation
            mousewheel
        >
            {   items?
                items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="comment">
                            <h3 className="comment__autor"></h3>

                        </div>
                    </SwiperSlide>
                )):
                <div className="comments__message">Комментариев пока нет</div>
            }
        </Swiper>
    </div>
  )
}

export default Comments