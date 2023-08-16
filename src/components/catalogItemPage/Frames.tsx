import axios from 'axios'
import React from 'react'

const Frames: React.FC<{movieId: number}> = ({movieId}) => {

    const [frames, setFrames] = React.useState<{url: string}[]>([])

    React.useEffect(() => {
        async function fetchFrames() {
            const { data } = await axios.get(`https://api.kinopoisk.dev/v1/image?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=movieId&search=${movieId}&field=type&search=frame`)

            setFrames(data.docs)
        }
        fetchFrames()
    }, [movieId])
  return (
    <div className='frames'>
        <h3>Кадры</h3>
            {
                <div className="frames-wrapper">
                {
                    frames.map((frame) => ( 
                        <img key={frame.url} className='frame' src={frame.url} alt="" />
                    ))
                }       
                </div>

            }
    </div>
  )
}

export default Frames