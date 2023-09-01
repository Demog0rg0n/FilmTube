import React from 'react'
import { Link } from 'react-router-dom'

interface watchButtonProps {
    additionalClass?: string;
    link: string;
}

const WatchButton: React.FC<watchButtonProps> = ({additionalClass, link}) => {
  return (
    <Link to={link} className={`watch-button ${additionalClass}`}>
        <svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg" fill='#e13abd' ><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"/></svg>
        Перейти
    </Link>
  )
}

export default WatchButton