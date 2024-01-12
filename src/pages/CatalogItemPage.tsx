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
      const { data } = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?id=${id}&token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB`)
      setInfo(data.docs[0])
    }

    fetchCatalogItem()

  }, [id])

  return (
    
  <>
    {
      info &&
      <main className="main">
        <section className="film">
            <div className="film__container container">
                <div className="film__info">
                    {
                      info?.poster?.previewUrl &&
                      <img src={info.poster.previewUrl} alt="" className="film__img" />
                    }

                    <div className="film__text">
                        <h1 className="film__title">{info.name} ({info.year})</h1>
                        <span className="film_alternative-title">{info.alternativeName}</span>

                        <Info {...info}/>
                        {
                          info.watchability.items.length > 0 &&
                          <Watchability {...info.watchability} />
                        }
                    </div>
                </div>
                {
                  info.description && 
                    <div className="film__description">
                        <h2 className='film__description__title'>Описание</h2>
                        <p>{info.description}</p>
                    </div>
                }
                
                <Frames movieId={info.id}/>
            </div>
        </section>
        <Reviews movieId={info.id}/>
        {
          info.similarMovies && <SimilarMovies similarMovies={info.similarMovies} />
        }
        
    </main>
    }
    
  </>
  
  )
}

export default CatalogItemPage