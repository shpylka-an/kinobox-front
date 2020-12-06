import React from 'react'
import NavBar from '../common/Navbar'
import { useSelector } from 'react-redux'
import MovieGrid from '../common/MovieGrid'

const DefaultLayout = ({ children }) => {
  const { searchList, search } = useSelector((state) => state.movies)
  return (
    <>
      <NavBar />
      {search && searchList && searchList.length !== 0 ? (
        <div style={{ padding: '0 10px' }}>
          <MovieGrid title="Search" movies={searchList.items} />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default DefaultLayout
