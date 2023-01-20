import React from 'react'

import SwiperElem from './SwiperElem'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';

import 'swiper/css/bundle'

const RecommendationsSwiper:React.FC = () => {
  const slide1 = {
    tittle: "Властелин Колец",
    description: "Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
    images: [
      "https://m.media-amazon.com/images/M/MV5BNjcwZGNmYWItN2EyOS00ZTNjLWEwYTktMDEzNjJlMTM2NWQ0XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
      "https://img5.goodfon.ru/wallpaper/nbig/a/6d/cakes-comics-cakescomics-matt-ferguson-by-matt-ferguson-ar-5.jpg",
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d850a103-ba6d-447f-8f8f-e8b07927dde4/1920x",
    ],
    link: "",
  }
  const slide2 = {
    tittle: "Гарри Поттер и философский камень",
    description: "Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: родители умерли, едва ему исполнился год, а от дяди и тёти, взявших сироту на воспитание, достаются лишь тычки да подзатыльники. Но в одиннадцатый день рождения Гарри всё меняется. Странный гость, неожиданно появившийся на пороге, приносит письмо, из которого мальчик узнаёт, что на самом деле он - волшебник и зачислен в школу магии под названием Хогвартс. А уже через пару недель Гарри будет мчаться в поезде Хогвартс-экспресс навстречу новой жизни, где его ждут невероятные приключения, верные друзья и самое главное — ключ к разгадке тайны смерти его родителей.",
    images: [
      "https://www.film.ru/sites/default/files/images/666-04.jpeg",
      "https://www.soyuz.ru/public/uploads/files/58/7477087/20211224105701844c33283e.jpg",
      "https://kartinkin.net/uploads/posts/2022-03/thumbs/1646971512_8-kartinkin-net-p-garri-potter-i-filosofskii-kamen-kartinki-8.jpg",
    ],
    link: "",
  }
  const slide3 = {
    tittle: "Звёздные войны: Эпизод 1 — Скрытая угроза",
    description: "Мальчику с далекой планеты суждено изменить судьбу галактики. Зрелищное, но недооцененное начало великой саги. Мирная и процветающая планета Набу. Торговая федерация, не желая платить налоги, вступает в прямой конфликт с королевой Амидалой, правящей на планете, что приводит к войне. На стороне королевы и республики в ней участвуют два рыцаря-джедая: учитель и ученик, Квай-Гон-Джин и Оби-Ван Кеноби...",
    images: [
      "https://ovideo.ru/images/gallery/0003/2955/0007.jpg",
      "https://gamebomb.ru/files/galleries/001/3/31/396413.jpg",
      "http://avatars.mds.yandex.net/get-ott/1652588/2a0000016fb27b97beee97f93c92540dd577/orig"
    ],
    link: "",
  }

  return (
    <Swiper
      className="recommendations-swiper"
      slidesPerView={1}
      modules={[Navigation]}
      navigation
    >
      <SwiperSlide>
        <SwiperElem {...slide1} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElem {...slide2} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElem {...slide3} />
      </SwiperSlide>
    </Swiper>
  )
}

export default RecommendationsSwiper