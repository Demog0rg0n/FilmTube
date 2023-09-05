import React from 'react'

import { Link } from 'react-router-dom'

import { setCatalogType } from '../redux/slices/catalogSlice'
import { closeMenu } from '../redux/slices/headerSlice'

import { useAppDispatch, useAppSelector } from '../redux/store'
import Search from './header/Search'

const Menu: React.FC = () => {

  function navItemClick(catalogType: "movie" | "tv-series" | "cartoon" | "anime") {
    dispatch(setCatalogType(catalogType))
    const menu = document.querySelector(".menu")
    const menuButton = document.querySelector(".menu-button")
    menu?.classList.remove("active")
    menuButton?.classList.remove("active")
  }
    const dispatch = useAppDispatch()
    const navItems: {name: string, value: "movie" | "tv-series" | "cartoon" | "anime"}[] = [
        {name: "Фильмы", value: "movie"},
        {name: "Сериалы", value: "tv-series"},
        {name: "Мультфильмы", value: "cartoon"},
        {name: "Аниме", value: "anime"},
      ]

    const menuOpened = useAppSelector(state => state.headerSlice.menuOpened)
  return (
    <div className="menu">
        <Search />
        <nav className="navigation">
            <ul>
              {
                navItems.map((navItem) => (
                  <li><Link to={"/catalog"} onClick={() => navItemClick(navItem.value)}>{navItem.name}</Link></li>
                ))
              }
            </ul>
        </nav>
    </div>
  )
}

export default Menu