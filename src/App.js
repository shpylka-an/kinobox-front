import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import NavBar from './components/NavBar'
import store from './store'
import { authCheck } from './actions/auth'

const theme = createMuiTheme()

store.dispatch(authCheck())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

export default App
