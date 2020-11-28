import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoviesCarousel from '../../../../common/MoviesCarousel'
import { fetchSuggestedMovies } from '../../slice'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSuggestedMovies())
  }, [dispatch])

  const { suggestedMovies } = useSelector((state) => state.web)

  return (
    <div style={{ padding: '0 10px' }}>
      {suggestedMovies
        ? suggestedMovies.map((item) => (
          <MoviesCarousel
            key={item.title}
            title={item.title}
            movies={item.items}
          />
        ))
        : 'Loading'}
    </div>
  )
}

export default HomePage
