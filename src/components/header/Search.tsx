import React from 'react'

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchSearchItems, setSearchItems, setSearchName } from '../../redux/slices/searchSlice'
import { Link } from 'react-router-dom'

type searchItemType = {
	name: string;
	poster: {url: string};
	year: number;
	id: number;
	type: "movie" | 'tv-series' | "cartoon"| "anime"
	rating: {
    kp:number,
    imdb:number,
  }
}

const Search = () => {

  	const { searchName, searchItems } = useSelector((state: RootState) => state.searchSlice)

  	const dispatch = useAppDispatch()

  	return (
		<>
		{/* <div className={`search ${searchName && "search_opened"} ${mobileSearchState && "search_opened"}`}>
			<div className={`input-wrapper ${mobileSearchState && "input-wrapper_opened"}`}>
				<input 
					value={searchName} type="text" placeholder='Поиск'
					onChange={(event) => {
						dispatch(setSearchName(event.target.value))
						dispatch(fetchSearchItems(event.target.value))
					}}
				/>
				<img src="https://avatars.mds.yandex.net/i?id=c34c9c764a87f4be0c7a2663080cd729-5539996-images-thumbs&n=13" alt="" 
					onClick={() => {
						dispatch(setSearchName(""))
						dispatch(setMobileSearchState(false))
						dispatch(setSearchItems([]))
					}}
				/>
			</div>
    		
			{searchItems.length > 0 &&
			<div className="search__popup">
				{
					searchItems.map((item: searchItemType) => (
						<Link onClick={() => dispatch(setSearchName(""))} to={`/catalog/${item.id}`} className='search__popup__item'>
							<img src={item?.poster?.url} alt="" />
							<div className="search__popup__item__info">
								<h4 className='search__popup__item__info__title'>{item?.name}</h4>
								<div>{item?.year}</div>
								<div className='search__popup__item__info__rating'>{item.rating.kp.toFixed(1)}</div>
							</div>
						</Link>
					))
				}
			</div>
			}
			
		</div> */}
		<div className="header__search search">
		<input 
			type="search" 
			className="searh__input" 
			placeholder="Поиск"
			value={searchName}
			onChange={(event) => {
				if(event.target.value !== "") {
					dispatch(fetchSearchItems(event.target.value))
					dispatch(setSearchName(event.target.value))

				} else {
					dispatch(setSearchName(event.target.value))
					dispatch(setSearchItems([]))
				}
			}}
		/>

		{searchItems.length > 0 &&
			<div className="search__popup">
				{
					searchItems.map((item: searchItemType) => (
						<Link onClick={() => dispatch(setSearchName(""))} className="search__item" to={`/catalog/${item.id}`}>
							<img src={item.poster.url} alt="" className="search__item__img" />

							<div className="search__item__text">
								<div className="search__item__title">{item.name} <span>({item.year})</span></div>
								<div className="search__item__grade">{item.rating.kp.toFixed(1)}</div>
							</div>
						</Link>
					))
				}
				
			</div>
		}
	</div>
	</>
  	)
}

export default Search