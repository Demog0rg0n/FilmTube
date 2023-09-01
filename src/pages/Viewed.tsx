import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import "../styles/viewed.css"
import { Link } from 'react-router-dom'
import { removeFromViewed } from '../redux/slices/userSlice'

const bookmark = require("../images/bookmark.png")

const Viewed = () => {
    const items = useAppSelector(state => state.userSlice.user)?.user_viewed
    const dispatch = useAppDispatch()

  return (
    <div className='viewed'>
        <div className="viewed__container container">
            <h2 className="viewed__title">Просмотренное</h2>
            <div className="viewed__items">
            {
                items?.map((item, index) => (
                    <div className='catalog-item'>
                    <Link to={`/catalog/${item.id}`}>
                      <img className='catalog-item__img' src={item.poster?.url || ""} alt="" />
                      <div className="catalog-item__info">
                        <h2 className="catalog-item__info__title">{item.title}</h2>
                      </div>
                    </Link>
                      <div className="add-to-lists">
                        <div className="add-to-lists__icon">
                          <img src={bookmark} alt="" className="add-to-lists__icon" />
                        </div>
                      
                        <div className="add-to-lists__items">
                          {
                            <div onClick={() => dispatch(removeFromViewed(index))} className="add-to-lists__item">Убрать</div>
                          }
                        </div>
                      </div>
                  </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Viewed