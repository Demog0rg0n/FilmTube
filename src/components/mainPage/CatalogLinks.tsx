import React from 'react'
import CatalogLink from './CatalogLink'

const CatalogLinks: React.FC = () => {
  return (
    <div className="catalog-links">
      <CatalogLink name='Фильмы' imgSrc="https://cdn.culture.ru/images/dd6472a3-a77c-51ed-916d-b4b1c878d02f" linkTo='movie' />
      <CatalogLink name='Аниме' imgSrc="https://slovnet.ru/wp-content/uploads/2018/08/4-45.jpg" linkTo='anime' />
      <CatalogLink name='Мультфильмы' imgSrc="https://mobimg.b-cdn.net/v3/fetch/4b/4b772484897e9a2ece1716a87051b5d9.jpeg" linkTo='cartoon' />
      <CatalogLink name='Сериалы' imgSrc="https://avatars.dzeninfra.ru/get-zen_doc/3512693/pub_5ffefad09bebf13400a49355_5ffefc203112ec025e3f5ac7/scale_1200" linkTo='tv-series' />
    </div>
  )
}

export default CatalogLinks