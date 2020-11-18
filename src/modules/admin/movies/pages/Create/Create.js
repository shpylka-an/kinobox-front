import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from '../../../../../components/Dropzone'
import { useDropzone } from 'react-dropzone'
import Grid from '@material-ui/core/Grid'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { fetchActorsRequest } from '../../../actors/actions'
import { useStyles } from './styles'
import { createMovieRequest } from '../../actions'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

const ratings = ['TV-MA', 'TV-14', 'TV-PG', 'R', 'PG-13']

const MoviesCreate = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchActorsRequest())
  }, [])

  const { actors } = useSelector((state) => state.actors)

  const previewDropzone = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: (acceptedFiles) => {
      formik.setFieldValue('files.preview', acceptedFiles[0])
    },
  })

  const videoFileDropzone = useDropzone({
    accept: 'video/*',
    multiple: false,
    onDrop: (acceptedFiles) => {
      formik.setFieldValue('files.videoFile', acceptedFiles[0])
    },
  })

  const formik = useFormik({
    initialValues: {
      attributes: {
        title: '',
        description: '',
        slug: '',
        releaseDate: '2017-05-24',
        rating: '',
        duration: 0
      },
      relationships: {
        actors: [],
        directors: [1],
      },
      files: {
        preview: null,
        videoFile: null,
      },
    },
    onSubmit: (values) => {
      dispatch(createMovieRequest(values))
    },
  })

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
                label="Slug"
                name="attributes.slug"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.attributes.slug}
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
            <FormControl
              className={classes.formControl}
              size="small"
            >
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
                  formik.setFieldValue(
                    'relationships.actors',
                    value.map((v) => v.id)
                  )
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Actors"
                    placeholder="Favorites"
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
          <Grid item xs={6}>
            <Dropzone {...previewDropzone} />
            <Dropzone {...videoFileDropzone} />
          </Grid>
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

export default MoviesCreate
