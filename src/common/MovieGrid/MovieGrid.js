import React, { useState, useEffect } from 'react'
import MovieCart from '../MovieCart'
import 'swiper/swiper-bundle.css'

const MoviesGrid = ({ title, movies }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const setNewCount = () => {
      const ww = window.innerWidth
      const cardCount = ww / 300
      setCount(Math.floor((ww - cardCount * 10) / 300))
    }

    setNewCount()

    window.addEventListener('resize', setNewCount)
  })

  return (
    <div className="carousel__wrapper">
      <h2>{title}</h2>
      <div className="carousel__grid">
        {movies.map((movie, i) => (
          <MovieCart
            key={movie.id}
            preview={
              movie.preview
                ? movie.preview.url
                : `https://memepedia.ru/wp-content/uploads/2018/08/papich.jpg`
            }
            title={movie.title}
            rating={movie.rating}
            id={movie.id}
            isInList={movie.isInList}
            year={movie.releaseDate.slice(0, 4)}
            position={
              i % count === 0
                ? `toRight`
                : i % count === count - 1
                ? `toLeft`
                : ``
            }
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesGrid
