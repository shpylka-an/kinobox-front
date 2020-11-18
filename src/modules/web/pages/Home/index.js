import React from 'react'
import MoviesCarousel from '../../../../common/MoviesCarousel'

const HomePage = () => {
  return (
    <div style={{ padding: '0 10px' }}>
      <MoviesCarousel title="New releases" />
      <MoviesCarousel title="Trending now" />
      <MoviesCarousel title="Popular on Kinobox" />
    </div>
  )
}

export default HomePage
