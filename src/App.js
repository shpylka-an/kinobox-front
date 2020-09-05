import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import store from './store'
import { authCheckRequest } from './actions/auth'

store.dispatch(authCheckRequest())

const theme = createMuiTheme()

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>
)

export default App
