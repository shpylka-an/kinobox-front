import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/auth'
import { Link as RouterLink, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import useStyles from './styles'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const { isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(register({ username, email, password, passwordConfirmation }))
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography ocmponent="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password confirmation"
            name="passwordConfirmation"
            onChange={e => setPasswordConfirmation(e.target.value)}
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
      </div>
    </Container>
  )
}

export default RegisterForm
