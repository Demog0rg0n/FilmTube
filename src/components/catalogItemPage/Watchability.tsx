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
    <div className="watchability">
        <h3 className="watchability__title">Где смотреть:</h3>
        <ul className="watchability__items">
          { watchability?.items?.length > 0 &&
              watchability.items.map((item, index) => (
                item &&
                <li key={index}>
                  <a className='watchability__item' href={item?.url}>
                      <img src={item?.logo.url} alt="" />
                  </a>
                </li>
              ))
          }
        </ul>
    </div>
  )
}

export default Watchability