import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import MovieCart from '../MovieCart'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation])

const MoviesCarousel = ({ title, movies }) => {
  const [firstSlideIndex, setFirstSlideIndex] = useState(0)
  const [lastSlideIndex, setlastSlideIndex] = useState(4)

  const setIndexes = (e) => {
    const currentBreakpoint = e.currentBreakpoint
    const activeIndex = e.activeIndex
    const lastIndex =
      e.originalParams.breakpoints[currentBreakpoint].slidesPerView -
      1 +
      activeIndex
    setFirstSlideIndex(activeIndex)
    setlastSlideIndex(lastIndex)
  }

  return (
    <div className="carousel__wrapper">
      <h2>{title}</h2>
      <Swiper
        spaceBetween={10}
        slidesPerGroup={2}
        navigation
        allowTouchMove={false}
        onSlideChange={setIndexes}
        onInit={setIndexes}
        onResize={setIndexes}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1340: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={movie.id}>
            <MovieCart
              preview={movie.preview.url}
              title={movie.title}
              rating={movie.rating}
              id={movie.id}
              year={movie.releaseDate.slice(0, 4)}
              isInList={movie.isInList}
              position={
                i === firstSlideIndex
                  ? `toRight`
                  : i === lastSlideIndex
                  ? `toLeft`
                  : ``
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MoviesCarousel
