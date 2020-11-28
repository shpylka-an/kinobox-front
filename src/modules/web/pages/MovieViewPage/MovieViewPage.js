import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { fetchSelectedMovie } from '../../slice'

const MovieViewPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchSelectedMovie({id}))
  }, [dispatch, id])

  const { selectedMovie } = useSelector((state) => state.web)

  return (
    <>
      {selectedMovie ? (
        <ReactPlayer
          url={selectedMovie.videoFile.url}
          controls={true}
          width="100vw"
          height="100vh"
          style={{ background: '#000' }}
        />
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default MovieViewPage
