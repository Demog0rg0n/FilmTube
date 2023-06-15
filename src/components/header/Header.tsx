import React from 'react'

import { Link } from 'react-router-dom'
import { openPopup, setMenuState } from '../../redux/slices/headerSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import '../../styles/header.scss'
import Search from './Search'
import AuthorizedUser from './AuthorizedUser'


const authorization = require("../../images/authorization.png")

const Header: React.FC = () => {
  
  const user = useAppSelector(state => state.userSlice.user)
  const dispatch = useAppDispatch()

  return (
    <header className='header' >
      <div className="header-container">
        <Link to={"/"} className="logo">FilmTube</Link>
        <Search />
        <button onClick={() => dispatch(setMenuState()) } className='menu-button'>
          <div className='menu-button__line'></div>
          <div className='menu-button__line'></div>
          <div className='menu-button__line'></div>
        </button>
        {
          document.cookie?
          <AuthorizedUser />:
          <img src={authorization} className='authorization' alt="" onClick={() => {
            dispatch(openPopup())
          }} />
        }


      </div>
		</header>
  )
}

export default Header