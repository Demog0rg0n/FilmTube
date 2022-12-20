import React from 'react'
import { Link } from 'react-router-dom'
import { setCatalogType } from '../redux/slices/catalogSlice'
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
        <div className="navigation-menu__element">Войти</div>
        {
        navItems.map(item => (
            <Link 
                to={`/catalog/${item.value}`} 
                onClick={() => dispatch(setCatalogType(item.value))}
                className="navigation-menu__element">{item.name}
            </Link>
        ))
        }
        
    </nav>
  )
}

export default Menu