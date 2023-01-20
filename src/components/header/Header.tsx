import React from 'react'

import { Link } from 'react-router-dom'
import { setMenuState } from '../../redux/slices/menuSlice'
import { useAppDispatch } from '../../redux/store'

import '../../styles/header.scss'

import Search from './Search'

const Header: React.FC = () => {

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
        <svg
          className='authorization' 
          data-name="Livello 1" 
          id="Livello_1" 
          viewBox="0 0 64 64" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32A32,32,0,1,0,32,0,32,32,0,0,0,0,32Z"/>
          <g id="User">
            <path className="cls-1" d="M46,42.18v5.91a0.91,0.91,0,0,1-.9.91H18a0.91,0.91,0,0,1-.9-0.91V42.18c0-4.77,6.47-8.64,14.45-8.64S46,37.41,46,42.18Z"/>
            <ellipse className="cls-1" cx="31.55" cy="21.18" rx="6.42" ry="6.18"/>
          </g>
        </svg>
      </div>
		</header>
  )
}

export default Header