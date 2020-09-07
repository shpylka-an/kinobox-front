import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'
import { authCheckRequest } from './actions/auth'
import store from './store'

const theme = createMuiTheme()

store.dispatch(authCheckRequest())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
