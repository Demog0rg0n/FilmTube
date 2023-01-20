import React from 'react'

import axios from 'axios'

import { useParams } from 'react-router'

import Info from '../components/catalogItemPage/Info';
import Watchability, { watchabilityType } from '../components/catalogItemPage/Watchability';
import Trailer, { trailerProps } from '../components/catalogItemPage/Trailer';
import PersonsSwiper from '../components/catalogItemPage/PersonsSwiper';
import Reviews from '../components/catalogItemPage/Reviews';
import Frames from '../components/catalogItemPage/Frames';
import SimilarMovies from '../components/catalogItemPage/SimilarMovies';

export interface catalogItemInfo {
  name: string;
  alternativeName: string;
  id: number;
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
  similarMovies: {
    name: string;
    id: number;
    poster: {
      url: string;
    }
  }[]
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
      <div className={`catalog-item-page container ${info.backdrop?.url && `catalog-item-page_with-backdrop`}`}>

        {
        info.backdrop&&
        <div className="backdrop">
          <div className="backdrop-gradient"></div>
          <img src={info.backdrop.url} alt="" />
        </div>
        }
      
        <div className="catalog-item-page__left">
          <img src={info.poster.previewUrl} alt="" />
          <Info {...info} />
          <Frames movieId={info.id}/>
        </div>

        <div className="catalog-item-page__right">
          <h1 className="name">{info.name + ` (${info.year})`}</h1>
          <h2 className='alternativeName'>{info.alternativeName}</h2>
          <p className="description">{info.description}</p>
          <Watchability {...info.watchability} />
          <Trailer trailers = {info.videos.trailers}/>
          <PersonsSwiper persons = {info.persons.slice(0, 10)} />
          <Reviews movieId={info.id}/>
        </div>
        
      </div>
      {info.similarMovies.length && <SimilarMovies similarMovies={info.similarMovies} />}
    </main>
  </div>: 
  <></>
  
  )
}

export default CatalogItemPage