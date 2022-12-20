import React from 'react'

import axios from 'axios'

import { useParams } from 'react-router'

import Info from '../components/catalogItemPage/Info';
import Watchability, { watchabilityType } from '../components/catalogItemPage/Watchability';
import { trailerProps } from '../components/catalogItemPage/Trailer';
import PersonsSwiper from '../components/catalogItemPage/PersonsSwiper';

export interface catalogItemInfo {
  name: string;
  alternativeName: string;
  countries: {name: string}[];
  ageRating: number;
  persons: {
    name: string;
    photo: string;
    enProfession: string;
  }[];
  budget: {
    currency: string;
    value: number;
  }
  movieLength: number;
  premiere: {
    world: string;
  }
  description: string
  genres: {name: string}[]
  poster: {
    url: string
    previewUrl: string
  }
  rating: {
    kp: number;
    imdb: number;
  }
  type: "movie" | 'tv-series' | "cartoon"| "anime";
  videos: trailerProps
  backdrop: {
    url: string;
  };
  votes: {
    imdb: number;
    kp: number;
  }
  watchability: watchabilityType;
  year: number;

}

const CatalogItemPage: React.FC = () => {

  const [info, setInfo] = React.useState<catalogItemInfo>()

  const { id } = useParams()

  React.useEffect(() => {

    async function fetchCatalogItem() {
      const { data } = await axios.get(`https://api.kinopoisk.dev/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=id&search=${id}&limit=1`)
      setInfo(data)
    }

    fetchCatalogItem()

  }, [id])

  return (
  info?
  <div className="catalog-item-page__wrapper">
    <main className="main">
      <div className={info.backdrop?.url? "catalog-item-page container catalog-item-page_with-backdrop": "catalog-item-page container"}>
        {
        info.backdrop&&
        <div className="backdrop">
          <div className="backdrop-gradient">
            <div className="backdrop-gradient__left"></div>
            <div className="backdrop-gradient__center"></div>
            <div className="backdrop-gradient__right"></div>
          </div>
          <img src={info.backdrop.url} alt="" />
        </div>
        }
      
        <div className="catalog-item-page__left">
          <img src={info.poster.previewUrl} alt="" />
          <Info {...info} />
        </div>

        <div className="catalog-item-page__right">
          <h1 className="name">{info.name + ` (${info.year})`}</h1>
          <h2 className='alternativeName'>{info.alternativeName}</h2>
          <p className="description">{info.description}</p>
          <Watchability {...info.watchability} />
          <PersonsSwiper persons = {info.persons.slice(0, 10)} />
        </div>
        
      </div>
    </main>
  </div>: 
  <div></div>
  
  )
}

export default CatalogItemPage