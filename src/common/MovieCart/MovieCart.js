import React, { useState } from 'react'
import styles from './MovieCart.module.css'
import playbutton from '../../media/playbutton.svg'
import { useDispatch } from 'react-redux'
import { ThumbDownAlt, ThumbUpAlt, Add, Check } from '@material-ui/icons'
import { addToList, removeFromList } from '../../modules/movies/slice'
import { Link } from 'react-router-dom'

let timeout = null

const MovieCart = ({
  preview,
  title,
  rating,
  year,
  id,
  position,
  isInList,
}) => {
  const [hovered, setHovered] = useState(false)
  const [inList, setInList] = useState(isInList)
  const dispatch = useDispatch()

  const hoverHandler = () => {
    timeout = setTimeout(() => {
      setHovered(true)
    }, 800)
  }

  const hoverOutHandler = () => {
    clearTimeout(timeout)
    setHovered(false)
  }

  const getPosition = () => {
    if (position === 'toRight') {
      return styles.toRight
    } else if (position === 'toLeft') {
      return styles.toLeft
    } else {
      return ``
    }
  }

  const addToListHandler = () => {
    setInList(true)
    dispatch(addToList({ id }))
  }

  const removeFromListHandler = () => {
    setInList(false)
    dispatch(removeFromList({ id }))
  }

  return (
    <div
      className={[styles.CardContainer, getPosition()].join(` `)}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverOutHandler}
    >
      <div className={[styles.Card, hovered ? styles.CardHover : ``].join(` `)}>
        <div
          className={styles.CardImage}
          style={{ backgroundImage: `url(${preview})` }}
        ></div>
        <div className={styles.CardControl}>
          <div className={styles.CardButtons}>
            <div className={styles.CardButtonContainer}>
              <Link to={`/movies/${id}`}>
                <div className={styles.CardButtonIconPlay}>
                  <img
                    className={styles.CardButtonIconImage}
                    src={playbutton}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className={styles.CardButtonContainer}>
              <div
                className={styles.CardButtonIcon}
                onClick={inList ? removeFromListHandler : addToListHandler}
              >
                {inList ? (
                  <Check style={{ fill: 'white', width: 20, height: 20 }} />
                ) : (
                  <Add style={{ fill: 'white', width: 20, height: 20 }} />
                )}
              </div>
            </div>
            <div className={styles.CardButtonContainer}>
              <div className={styles.CardButtonIcon}>
                <ThumbUpAlt style={{ fill: 'white', width: 20, height: 20 }} />
              </div>
            </div>
            <div className={styles.CardButtonContainer}>
              <div className={styles.CardButtonIcon}>
                <ThumbDownAlt
                  style={{ fill: 'white', width: 20, height: 20 }}
                />
              </div>
            </div>
          </div>
          <div className={styles.CardContainerText}>
            <div className={styles.CardContainerName}>{title}</div>
          </div>
          <div className={styles.CardContainerText}>
            <div className={styles.CardContainerRating}>{rating}</div>
            <div className={styles.CardContainerYear}>{year}</div>
          </div>
          {/* <div className="card__text_bottom">Violent • Gritty • Dark</div> */}
        </div>
      </div>
    </div>
  )
}

export default MovieCart
