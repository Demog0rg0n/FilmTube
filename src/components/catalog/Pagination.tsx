import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../redux/slices/catalogSlice'
import { RootState } from '../../redux/store'

const Pagination: React.FC = () => {

  const pages = [1, 2, 3, 4, 5]

  const activePage = useSelector((state: RootState) => state.catalogSlice.pageState)
  const dispatch = useDispatch()
  return (
    <div className="pagination">
      {
        pages.map(page => (
            <div onClick={() => dispatch(setPage(page)) } className={activePage === page? "active-page pagination__elem": "pagination__elem"}>{page}</div>
        ))
      }
    </div>
  )
}

export default Pagination