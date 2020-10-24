import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'
import { authCheckRequest } from './modules/auth/actions'
import configureStore from './store/configureStore'

const theme = createMuiTheme()
const store = configureStore()

store.dispatch(authCheckRequest())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

export default App
