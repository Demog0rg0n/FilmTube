import React from 'react'
import CatalogLink from '../components/MainPage/CatalogLink'

import RecommendationsSwiper from '../components/MainPage/RecomSwiper/RecommendationsSwiper'
import Top10Swipers from '../components/MainPage/top10swipers'

import '../styles/main.scss'

const Main: React.FC = () => {
  return (
    <main className='main container'>
      <RecommendationsSwiper />
      <Top10Swipers />
      <CatalogLink />
    </main>
  )
}

export default Main