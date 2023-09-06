import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, setSortState, sortStateType } from '../../redux/slices/catalogSlice'
import { RootState } from '../../redux/store'

const Sort = () => {

  const sortState = useSelector((state: RootState) => state.catalogSlice.sortState)
  const dispatch = useDispatch()

  const $popupBody = document.getElementsByClassName("popup-body")[0]

  const [sortOpened, setSortOpened] = React.useState(false)

  const sortList: sortStateType[] = [
    {name: "Популярности", value: "votes.imdb"},
    {name: "Рейтингу", value: "rating.kp"},
    {name: "Дате", value: "year&field=year&search=1970-2022&sortField=votes.kp&sortType=-1"},
  ]
	
  return (
    <div className="sort">
      <div>Сортировать по: <span onClick={() => {setSortOpened(!sortOpened)}}>{sortState.name}</span></div>
        <ul className={!sortOpened? "sort-popup hidden": "sort-popup"}>
          {sortList.map((item, index) => (
            <li key={index + 1} onClick={(e) => {
              dispatch(setSortState(item))
              setSortOpened(false)
              dispatch(setPage(1))
            }}>{item.name}</li>
          ))}
        </ul>
      </div>
  )
}

export default Sort