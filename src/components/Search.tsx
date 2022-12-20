import React from 'react'

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchSearchItems, setSearchName } from '../redux/slices/searchSlice'
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
		<div className="search">
    	<input onChange={(event) => {
					dispatch(setSearchName(event.target.value))
					dispatch(fetchSearchItems(event.target.value))
				}} 
				value={searchName} type="text" placeholder='Поиск'
			/>
			{searchName &&
			<div className="search__popup">
				{
					searchItems.map((item: searchItemType) => (
						<Link onClick={() => dispatch(setSearchName(""))} to={`/catalog/${item.type}/${item.id}`} className='search__popup__item'>
							<img src={item?.poster?.url} alt="" />
							<div className="search__popup__item__info">
								<h4>{item?.name}</h4>
								<div>{item?.year}</div>
								<div>{item?.rating.imdb}</div>
							</div>
						</Link>
					))
				}
			</div>
			}
			
		</div>
  )
}

export default Search