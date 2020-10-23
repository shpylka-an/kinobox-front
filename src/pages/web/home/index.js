import React from 'react'
import MoviesCarousel from '../../../components/MoviesCarousel'

const HomePage = () => (
  <div style={{padding: '0 10px'}}>
    <MoviesCarousel title='Trending now' />
    <MoviesCarousel title='Popular on Kinobox' />
  </div>
)

export default HomePage
