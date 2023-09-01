import React from 'react'

export type trailerProps = {
    trailers: {
        name: string;
        url: string;
    }[]
}

const Trailer: React.FC<trailerProps> = ({trailers}) => {

  function openTrailer(){
    const $body = document.getElementsByTagName("body")[0]
    $body.style.overflow = "hidden"
    setTrailerState(true)
  }

  function closeTrailer(){
    const $body = document.getElementsByTagName("body")[0]
    $body.style.overflow = "initial"
    setTrailerState(false)
  }

  let trailerUrl;

  const [trailerState, setTrailerState] = React.useState(false)

  for(let trailer of trailers){
    if(trailer.url.indexOf("embded")){
      trailerUrl = trailer.url
    }
  }
  
  return (
    trailerUrl?
    <div className="trailer-container">
      <h3>Трейлер</h3>
      <button onClick={openTrailer} className='watch-trailer'>Смотреть трейлер</button>
        { trailerState &&
          <div style={{top: window.scrollY}} className="trailer-popup">
            <iframe className='trailer' title='trailer' src={trailerUrl} />
            <svg height="512px" id="Layer_1"  
              className='close-trailer'
              version="1.1" 
              viewBox="0 0 512 512" 
              width="512px" 
              xmlns="http://www.w3.org/2000/svg"
              fill='#ffffff' 
              onClick={closeTrailer}>
              <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
            </svg>
          </div>
        }
    </div>: <></>
  )
}

export default Trailer