import React from 'react'
import styles from './MovieCart.module.css'

const MovieCart = ({ preview }) => {

  return (
    <>
      <img
        src={preview}
        alt={preview}
        className={styles.preview}
      />
    </>
  )
}

export default MovieCart
