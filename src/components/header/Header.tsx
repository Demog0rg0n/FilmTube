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
    <header className="header">
        <div className="header__container container">
            <a href="/" className="logo">FilmTube</a>
            <div className="menu">
                <Search />
                <div className="header__login"></div>
                <nav className="navigation">
                    <ul>
                        <li><a href="">Фильмы</a></li>
                        <li><a href="">Аниме</a></li>
                        <li><a href="">Мультфильмы</a></li>
                        <li><a href="">Сериалы</a></li>
                    </ul>
                </nav>
            </div>
            <div className="menu-button">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </header>
  )
}

export default Header