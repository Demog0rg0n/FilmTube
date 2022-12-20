import React from 'react'

export type trailerProps = {
    trailers: {
        name: string;
        url: string;
    }[]
}

const Trailer: React.FC<trailerProps> = (videos) => {
  return (
    videos.trailers &&
    <div className="trailer-container">
        <h3 className="trailer__title">Трейлер</h3>
        <iframe className='trailer' title='trailer' src={`${videos.trailers[0].url}`} />
    </div>
  )
}

export default Trailer