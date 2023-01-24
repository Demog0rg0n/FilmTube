import React from 'react'

import RecommendationsSwiper from '../components/mainPage/RecomSwiper/RecommendationsSwiper'
import Top10Swipers from '../components/mainPage/top10swipers'
import CatalogLink from '../components/mainPage/CatalogLink'

const Main: React.FC = () => {
  return (
    <main className='main'>
      <div className="container">
        <RecommendationsSwiper />
        <Top10Swipers />
        <CatalogLink />
      </div>
    </main>
  )
}

export default Main