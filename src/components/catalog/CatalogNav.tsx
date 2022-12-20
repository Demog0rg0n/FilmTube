import React from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { setCatalogType } from '../../redux/slices/catalogSlice'
import { useAppSelector } from '../../redux/store'

const CatalogNav: React.FC = () => {

const catalogTypeState = useAppSelector(state => state.catalogSlice.catalogTypeState)

  const dispatch = useDispatch()

  const navItems: {name: string, value: "movie" | "tv-series" | "cartoon" | "anime"}[] = [
	{name: "Фильмы", value: "movie"},
	{name: "Сериалы", value: "tv-series"},
	{name: "Мультфильмы", value: "cartoon"},
	{name: "Аниме", value: "anime"},
  ]

  return (
	
    <nav className="catalog-nav">
		{
			navItems.map(item => (
				<Link 
					onClick={() => dispatch(setCatalogType(item.value))}
					to={"/catalog/movies"} 
					className={catalogTypeState === item.value? "catalog-nav__elem_active catalog-nav__elem": "catalog-nav__elem"}>{item.name}
				</Link>
			))
		}
    </nav>
  )
}

export default CatalogNav