import React from 'react'
import { Link } from 'react-router-dom'
import { setCatalogType } from '../redux/slices/catalogSlice'
import { closeMenu } from '../redux/slices/menuSlice'
import { setMobileSearchState } from '../redux/slices/searchSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Menu: React.FC = () => {
    const dispatch = useAppDispatch()
    const navItems: {name: string, value: "movie" | "tv-series" | "cartoon" | "anime"}[] = [
        {name: "Фильмы", value: "movie"},
        {name: "Сериалы", value: "tv-series"},
        {name: "Мультфильмы", value: "cartoon"},
        {name: "Аниме", value: "anime"},
      ]

    const menuOpened = useAppSelector(state => state.menuSlice.menuOpened)
  return (
    <nav className={menuOpened? 'navigation-menu navigation-menu_opened': 'navigation-menu'}>
        <div className="navigation-menu__element">
          <span>Войти</span>
          <img src="https://www.seekpng.com/png/full/138-1387657_app-icon-set-login-icon-comments-avatar-icon.png" alt="" />
        </div>
        <div
          className="navigation-menu__element"
          onClick={() => {
            dispatch(setMobileSearchState(true))
            dispatch(closeMenu())
          }}
        >
          <span>Поиск</span>
          <img src="https://cdn2.iconfinder.com/data/icons/ui-thick-lines/620/search-1024.png" alt="" />
        </div>
        <div className="categories">
          {
          navItems.map(item => (
            <Link 
                key={item.name}
                to={`/catalog/${item.value}`} 
                onClick={() => dispatch(setCatalogType(item.value))}
                className="navigation-menu__element">{item.name}
            </Link>
          ))
        }
        </div>
    </nav>
  )
}

export default Menu