import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { createMovieRequest } from '../../actions'
import Dropzone from '../../../../../components/Dropzone'
import { useDropzone } from 'react-dropzone'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    width: '100%',
  },
}))

const MoviesCreate = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

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
      data: {
        title: '',
        description: '',
        slug: '',
        releaseDate: '2017-05-24',
      },
      files: {
        preview: null,
        videoFile: null
      }
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
                name="data.title"
                variant="outlined"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.data.title}
              />
            </div>
            <div>
              <TextField
                label="Description"
                name="data.description"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.data.description}
              />
            </div>
            <div>
              <TextField
                label="Slug"
                name="data.slug"
                variant="outlined"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.data.slug}
              />
            </div>
            <div>
              <TextField
                label="Release Date"
                name="data.releaseDate"
                type="date"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.data.releaseDate}
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
