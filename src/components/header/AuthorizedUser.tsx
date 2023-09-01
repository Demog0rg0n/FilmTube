import React from 'react'

import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'


const AuthorizedUser = () => {

  const [popupState, setPopupState] = React.useState(false)

  const viewed = useAppSelector(state => state.userSlice.user?.user_viewed)
  const wishList = useAppSelector(state => state.userSlice.user?.user_wish_list)

  return (
    <div className="authorized-user">
      <div className="authorized-user__button" onClick={() => {
        setPopupState(!popupState)
      }}>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
      </div>
      {
        popupState && 
        <div className="authorized-user__popup">
          <Link className="header__wish-list" to={"/wish-list"}>
            <span>Список желаний</span>
            <span>{wishList?.length}</span>
          </Link>
          <Link className="header__viewed" to={"/viewed"}>
            <span>Список просмотренного</span>
            <span>{viewed?.length}</span>
          </Link>
        </div>
      }
    </div>
  )
}

export default AuthorizedUser