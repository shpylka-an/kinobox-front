import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import MovieCart from '../MovieCart'
import 'swiper/swiper-bundle.css'
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation])

const MoviesCarousel = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Swiper
        spaceBetween={4}
        slidesPerView={6}
        slidesPerGroup={2}
        navigation
        allowTouchMove={false}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCart preview={movie.preview.url} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MoviesCarousel
