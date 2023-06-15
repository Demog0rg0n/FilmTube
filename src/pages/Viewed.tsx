import React from 'react'
import { useAppSelector } from '../redux/store'
import axios from 'axios'
import CatalogElem, { catalogItemProps } from '../components/catalog/CatalogItem'



const Viewed = () => {
    const [films, setFilms] = React.useState<catalogItemProps[]>([])
    const viewedItems = useAppSelector(state => state.userSlice.user)?.user_viewed

    React.useEffect(() => {
        
        viewedItems?.map( async (id) => {
            const { data } = await axios.get(`https://api.kinopoisk.dev/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=id&search=${id}&limit=1`)
    
            if(films) {
                films.push(data)
    
                setFilms([...films])
            }
        })
    
        console.log(films)
    }, [])

  return (
    <div className='viewed'>
        <div className="viewed__container container">
            <h2 className="viewed__title">Просмотренное</h2>
            <div className="viewed__items">
            {
                films?.map(film => (
                    <CatalogElem {...film}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Viewed