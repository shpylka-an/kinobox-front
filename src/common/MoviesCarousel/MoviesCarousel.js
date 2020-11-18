import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import MovieCart from '../MovieCart'
import 'swiper/swiper-bundle.css'
import preview from './breaking-bad.webp'
import soul from './soul.jpg'
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation])

const MoviesCarousel = ({ title }) => {
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
        <SwiperSlide>
          <Link to="/movies/123">
            <MovieCart preview={preview} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/movies/1233">
            <MovieCart preview={soul} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart preview={preview} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart preview={preview} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart preview={preview} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart preview={preview} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MoviesCarousel
