import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieGrid from '../../../../common/MovieGrid'
import { fetchMoviesList } from '../../../movies/slice'
import { CircularProgress } from '@material-ui/core'

const MyList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMoviesList({}))
  }, [dispatch])

  const { moviesList, listLoading } = useSelector((state) => state.movies)

  return (
    <div style={{ padding: '0 10px' }}>
      {!listLoading && moviesList ? (
        <MovieGrid title="My List" movies={moviesList} />
      ) : (
        <div className="small__loader">
          <CircularProgress />
        </div>
      )}
    </div>
  )
}

export default MyList
