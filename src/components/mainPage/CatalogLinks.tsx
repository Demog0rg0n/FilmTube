import React from 'react'
import CatalogLink from './CatalogLink'
import films from '../../images/films.jpg'
import serials from '../../images/serials.webp'
import cartoons from '../../images/cartoons.jpeg'
import anime from '../../images/anime.jpg'

const CatalogLinks: React.FC = () => {
  return (
    <section className="categories">
        <div className="categories__container container">
            <ul className="categories__list">
                <li>
                    <CatalogLink imgSrc={films} name='Фильмы' catalogState='movie'/>
                </li>
                <li>
                  <CatalogLink imgSrc={serials} name='Сериалы' catalogState='tv-series'/>
                </li>
                <li>
                  <CatalogLink imgSrc={anime} name='Аниме' catalogState='anime'/>
                </li>
                <li>
                  <CatalogLink imgSrc={cartoons} name='Мультфильмы' catalogState='cartoon'/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default CatalogLinks