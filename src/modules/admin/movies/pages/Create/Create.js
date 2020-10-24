import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'
import { createMovieRequest } from '../../actions'

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
      width: '25ch',
    },
  },
}))

const MoviesCreate = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      slug: '',
      releaseDate: '2017-05-24',
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
        <div>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div>
          <TextField
            label="Slug"
            name="slug"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.slug}
          />
        </div>
        <div>
          <TextField
            label="Release Date"
            name="releaseDate"
            type='date'
            size="small"
            onChange={formik.handleChange}
            value={formik.values.releaseDate}
          />
        </div>
        <div>
          <Button type='submit' variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default MoviesCreate
