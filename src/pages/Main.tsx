import React from 'react'

import RecommendationsSwiper from '../components/mainPage/RecomSwiper/RecommendationsSwiper'
import Top10Swipers from '../components/mainPage/top10swipers'
import CatalogLink from '../components/mainPage/CatalogLink'

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