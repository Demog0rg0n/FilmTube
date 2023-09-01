import axios from 'axios'
import React from 'react'
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Frames: React.FC<{movieId: number}> = ({movieId}) => {

    const [frames, setFrames] = React.useState<{url: string}[]>([])

    React.useEffect(() => {
        async function fetchFrames() {
            const { data } = await axios.get(`https://api.kinopoisk.dev/v1/image?token=X2QN6H3-HE04T8F-MHEB1P5-ZDA1BNB&field=movieId&search=${movieId}&field=type&search=screenshot`)

            setFrames(data.docs)
        }
        fetchFrames()
    }, [movieId])
  return (
    <section className='frames'>
        <h2 className='reviews__title'>Кадры</h2>
        <Swiper
            className="frames-swiper"
            slidesPerView={"auto"}
            freeMode
            mousewheel
            spaceBetween={10}
            modules={[Mousewheel, FreeMode]}
        >
            {
                frames.map((frame) => ( 
                    <SwiperSlide>
                        <img key={frame.url} className='frame' src={frame.url} alt="" />
                    </SwiperSlide>
                ))
            }
            

        </Swiper>
    </section>
  )
}

export default Frames