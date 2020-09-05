import React from 'react'
import { Link as RouterLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { StyledPaper, StyledForm, StyledSubmitButton } from './styled'

import { loginRequest } from '../../../actions/auth'
import { getValidationErrors } from '../../../utils/validation'

const LoginPage = () => {
  const { isLoggedIn, isFetching, errors } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginRequest(values))
    },
  })

  if (isLoggedIn) {
    return <Redirect to="/profile" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledForm noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            error={!!getValidationErrors(errors, 'email')}
            helperText={getValidationErrors(errors, 'email')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={!!getValidationErrors(errors, 'password')}
            helperText={getValidationErrors(errors, 'password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isFetching}
          >
            Sign in
          </StyledSubmitButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledPaper>
    </Container>
  )
}

export default LoginPage
