import React from 'react'

import { Link } from 'react-router-dom'


const AuthorizedUser = () => {

  const [popupState, setPopupState] = React.useState(false)

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
            Список желаний
          </Link>
          <Link className="header__viewed" to={"/viewed"}>
            Список просмотренного
          </Link>
        </div>
      }
    </div>
  )
}

export default AuthorizedUser