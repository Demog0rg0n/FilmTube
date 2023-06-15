import axios from 'axios'
import React from 'react'

const WishList = () => {

    const [items, setItems] = React.useState([34])

    React.useEffect(() => {
        async function fetchItems(id:number) {
            const { data } = await axios.get(`/api/user/${id}`)
            setItems(data)

            items.forEach( async (item) => {
                const { data } = await axios.get(`https://api.kinopoisk.dev/movie?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=id&search=${id}&limit=1`)
            })
        }
    }, [])

  return (
    <div className="wish-list">
        <h2 className="wish-list__title">Список желаний</h2>

        {
  
        }
    </div>
  )
}

export default WishList