import React from 'react'

export type watchabilityType = {
    items: {
      logo: {
        url: string;
      };
      name: string;
      url: string
    }[]
  }

const Watchability: React.FC<watchabilityType> = (watchability) => {
  return (
    watchability.items && 
    <div className="watchability">
        <h3 className="watchability__tittle">Где смотреть:</h3>
        <div className="watchability__items">
        {
            watchability.items.map((item) => (
            <a key={item.name} className='watchability__item' href={item.url}>
                <img src={item.logo.url} alt="" />{item.name}
            </a>
            ))
        }
        </div>
    </div>
  )
}

export default Watchability