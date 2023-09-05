import React from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import '../../styles/header.scss'
import Search from './Search'



const Header: React.FC = () => {
  
//   const user = useAppSelector(state => state.userSlice.user)
  const dispatch = useAppDispatch()

  let count = 0
  React.useEffect(() => {
    if(count == 0) {
        const menuButton = document.querySelector(".menu-button")
        const menu = document.querySelector(".menu")
        menuButton?.addEventListener("click", () => {
            menu?.classList.toggle("active")
            menuButton?.classList.toggle("active")
        })
        count++
        console.log(count)
    }
  }, [])
  

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