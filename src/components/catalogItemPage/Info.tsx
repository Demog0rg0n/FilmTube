import React from 'react'
import { catalogItemInfo } from '../../pages/CatalogItemPage'
import InfoTittle from './InfoTittle'

const Info: React.FC<catalogItemInfo> = (info) => {
  return (
    <div className="info">
          <InfoTittle type={info.type} />
          <table className='info__table'>
            <tbody>
              {info.year &&
              <tr>
                <th className='info__table__title'>Год производства</th>
                <td>{info.year}</td>
              </tr>
              }
              {info.countries &&
              <tr>
                <th className='info__table__title'>Страна</th>
                <td>{info.countries.map(country => `${country.name}, `)}</td>
              </tr>
              }
              {info.genres &&
              <tr>
                <th className='info__table__title'>Жанр</th>
                <td>{info.genres.map(genre => `${genre.name} `)}</td>
              </tr>
              }
              {info.budget.value &&
              <tr>
                <th className='info__table__title'>Бюджет</th>
                <td>{`${info.budget.value} ${info.budget.currency}` }</td>
              </tr>
              }
              {info.ageRating &&
              <tr>
                <th className='info__table__title'>Возраст</th>
                <td>{info.ageRating}+</td>
              </tr>
              }
              {
              <tr>
                <th className='info__table__title'>Премьера</th>
                <td>{info.premiere.world.slice(0, 10)}</td>
              </tr>
              }
              {
              <tr>
                <th className='info__table__title'>Длительность</th>
                <td>{info.movieLength} мин. / {Math.floor(info.movieLength / 60)}:{info.movieLength % 60}</td>
              </tr>
              }
            </tbody>
          </table>
        </div>
  )
}

export default Info
