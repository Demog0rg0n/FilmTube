import React from 'react'

type InfoTittleProps = {
    type: "movie" | "tv-series" | "cartoon" | "anime"
}

const InfoTittle: React.FC<InfoTittleProps> = ({type}) => {

    function getTittle(type: string) {
        switch(type) {
            case "tv-series":
                return "сериале"
            case "movie":
                return "фильме"
            case "cartoon":
                return "мультфильме"
            case "anime":
                return "аниме"
        }
    }
 
  return (
    <h3 className="info__tittle">О {getTittle(type)}</h3>
  )
}

export default InfoTittle