import React from 'react'

import Top10Swiper from './Top10Swiper'
import axios from 'axios'

const Index:React.FC = () => {

  const [films, setFilms] = React.useState()
  const [serials, setSerials] = React.useState()

  async function fetchFilms() {
    const { data } = await axios.get("https://api.kinopoisk.dev/v1.3/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&sortField=votes.kp&sortType=-1&field=type&search=movie&limit=10")
    console.log("Запрос")
    setFilms(data.docs)
  }
  async function fetchSerials() {
    const { data } = await axios.get("https://api.kinopoisk.dev/v1.3/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&sortField=votes.kp&sortType=-1&field=type&search=tv-series&limit=10")
    console.log("Запрос")
    setSerials(data.docs)
  }

  React.useEffect(() => {

    fetchFilms()
    fetchSerials()

  }, [])

  return (
    <div className="top10-swipers">
      <div className="top10-swiper__container">
        <h2 className="top10-swiper__title">Топ 10 фильмов</h2>
        {
          films &&
          <Top10Swiper items={films}/>
        }
      </div>
      <div className="top10-swiper__container">
        <h2 className="top10-swiper__title">Топ 10 Сериалов</h2>
        {
          serials &&
          <Top10Swiper items={serials}/>

        }
      </div>
    </div>
  )
}

export default Index