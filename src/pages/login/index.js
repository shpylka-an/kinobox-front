import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from '@material-ui/core/Container';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { CurrentUserContext } from "../../contexts/currentUser";
import useHttp from "../../hooks/useHttp";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, dispatch] = useContext(CurrentUserContext)
  const {loading, makeRequest} = useHttp()

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const loginData = await makeRequest('POST', 'auth/login', {
        email, password
      })

      localStorage.setItem('token', loginData.access_token)

      const userData = await makeRequest('POST', 'users/current')

      dispatch({type: 'SET_AUTHORIZED', payload: userData})
    } catch (e) {
      alert(e.message)
    }
  };

  const classes = useStyles();

  if (currentUser.isLoggedIn) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email'
            name='email'
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary'/>}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
};

export default LoginPage;
