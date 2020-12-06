import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import { useStyles } from './styles'
import { useFormik } from 'formik'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { ratings } from '../Create/Create'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import { fetchMovie } from '../../slice'
import { fetchActors } from '../../../actors/slice'
import { fetchDirectors } from '../../../directors/slice'

const MoviesEdit = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchMovie({ id }))
    dispatch(fetchActors())
    dispatch(fetchDirectors())
  }, [dispatch, id])

  const { movie } = useSelector((state) => state.movies)

  const formik = useFormik({
    initialValues: {
      attributes: {
        title: '',
        description: '',
        releaseDate: '',
        rating: '',
        duration: 0,
      },
      relationships: {
        actors: [],
        directors: [],
      },
      files: {
        preview: null,
        videoFile: null,
      },
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const { actors } = useSelector((state) => state.actors)
  const { directors } = useSelector((state) => state.directors)

  useEffect(() => {
    if (movie) {
      formik.setFieldValue('attributes.title', movie.title)
      formik.setFieldValue('attributes.description', movie.description)
      formik.setFieldValue('attributes.slug', movie.slug)
      formik.setFieldValue('attributes.releaseDate', movie.releaseDate)
      formik.setFieldValue('attributes.rating', movie.rating)
      formik.setFieldValue('attributes.duration', movie.duration)
      formik.setFieldValue('attributes.actors', movie.cast)
      formik.setFieldValue('attributes.directors', movie.directors)
    }
    // eslint-disable-next-line
  }, [movie])

  return (
    <Paper className={classes.root} elevation={4}>
      <form
        onSubmit={formik.handleSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <div>
              <TextField
                label="Title"
                name="attributes.title"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.attributes.title}
              />
            </div>
            <div>
              <TextField
                label="Description"
                name="attributes.description"
                multiline
                rows={4}
                size="small"
                onChange={formik.handleChange}
                value={formik.values.attributes.description}
              />
            </div>
            <div>
              <TextField
                label="Release Date"
                name="attributes.releaseDate"
                type="date"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.attributes.releaseDate}
              />
            </div>
            <FormControl className={classes.formControl} size="small">
              <InputLabel>Rating</InputLabel>
              <Select
                name="attributes.rating"
                value={formik.values.attributes.rating}
                onChange={formik.handleChange}
              >
                {ratings.map((rating) => (
                  <MenuItem value={rating}>{rating}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <Autocomplete
                multiple
                options={actors}
                getOptionLabel={(option) =>
                  `${option.firstName} ${option.lastName}`
                }
                onChange={(e, value) => {
                  formik.setFieldValue('attributes.actors', value)
                }}
                value={formik.values.relationships.actors}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Actors"
                    placeholder="Select actors"
                  />
                )}
              />
            </div>
            <div>
              <Autocomplete
                multiple
                options={directors}
                getOptionLabel={(option) =>
                  `${option.firstName} ${option.lastName}`
                }
                onChange={(e, value) => {
                  formik.setFieldValue('attributes.directors', value)
                }}
                value={formik.values.relationships.directors}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Directors"
                    placeholder="Select directors"
                  />
                )}
              />
            </div>
            <div>
              <TextField
                type="number"
                label="Duration"
                name="attributes.duration"
                value={formik.values.attributes.duration}
                onChange={formik.handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6} />
        </Grid>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default MoviesEdit
