import React from 'react'

import RecommendationsSwiper from '../components/mainPage/RecomSwiper/RecommendationsSwiper'
import Top10Swipers from '../components/mainPage/top10swipers'
import CatalogLinks from '../components/mainPage/CatalogLinks'

const Main: React.FC = () => {
  return (
    <main className='main-page'>
      <div className="main-page__content container">
        <div className="main-page__content__top">
          <RecommendationsSwiper />
          <Top10Swipers />
        </div>
        <CatalogLinks />
      </div>
    </main>
  )
}

export default Main