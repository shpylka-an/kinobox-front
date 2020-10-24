import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { Link as RouterLink, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

import useStyles from './styles'
import { registerRequest } from '../../actions'

const Register = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: (values) => {
      dispatch(registerRequest(values))
    },
  })

  if (isLoggedIn) {
    return <Redirect to="/profile" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography ocmponent="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password confirmation"
            name="passwordConfirmation"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Link component={RouterLink} to="/login">
            Already have an account? Sign In
          </Link>
        </form>
      </Paper>
    </Container>
  )
}

export default Register
