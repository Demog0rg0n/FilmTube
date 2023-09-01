import React from 'react'

import RecommendationsSwiper from '../components/mainPage/RecomSwiper/RecommendationsSwiper'
import Top10Swipers from '../components/mainPage/top10swipers/Top10Swipers'
import CatalogLinks from '../components/mainPage/CatalogLinks'
import { Link } from 'react-router-dom'

const Main: React.FC = () => {
  return (
    <main className="main">
        <section className="swipers">
            <div className="swipers__container container">

                <RecommendationsSwiper />
        
                <Top10Swipers />
            </div>
        </section>
        <CatalogLinks />
    </main>
  )
}

export default Main