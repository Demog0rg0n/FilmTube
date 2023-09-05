import React from 'react'
import { catalogItemInfo } from '../../pages/CatalogItemPage'

function formattingInfoToString(arr: {name: string}[]){
  let result = "";

  for(let item of arr){
    result += item.name + ", "
  }

  result = result.slice(0, -2)
  return result
}

const Info: React.FC<catalogItemInfo> = (info) => {
  return (
    <table className="film__table">
        <tbody>
        {info.year &&
          <tr>
            <th>Год производства</th>
            <td>{info.year}</td>
          </tr>
          }
          {info.countries &&
          <tr>
            <th>Страна</th>
            <td>{formattingInfoToString(info.countries)}</td>
          </tr>
          }
          {info.genres &&
          <tr>
            <th>Жанр</th>
            <td>{formattingInfoToString(info.genres)}</td>
          </tr>
          }
          {info.budget?.value &&
          <tr>
            <th>Бюджет</th>
            <td>{`${info.budget?.value} ${info.budget.currency}` }</td>
          </tr>
          }
          {info.ageRating &&
          <tr>
            <th>Возраст</th>
            <td>{info.ageRating}+</td>
          </tr>
          }
          {info.premiere?.world &&
          <tr>
            <th>Премьера</th>
            <td>{info.premiere.world.slice(0, 10)}</td>
          </tr>
          }
          {info.movieLength &&
          <tr>
            <th>Длительность</th>
            <td>{info.movieLength} мин. / {Math.floor(info.movieLength / 60)}:{info.movieLength % 60}</td>
          </tr>
        }
        </tbody>
    </table>
  )
}

export default Info
