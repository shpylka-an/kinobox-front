import React from 'react'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { Admin, Resource } from 'react-admin'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Routes from './routes'
import store from './store/createStore'
import { authCheckRequest } from './actions/auth'
import createStore from './store/createStore'
import crudProvider from '@fusionworks/ra-data-nest-crud'

// dependency injection
const dataProvider = crudProvider('http://localhost:3000');
const authProvider = () => Promise.resolve()
// const i18nProvider = polyglotI18nProvider((locale) => {
//   if (locale !== 'en') {
//     return messages[locale]
//   }
//   return defaultMessages
// })
const history = createHashHistory()
const theme = createMuiTheme()

store.dispatch(authCheckRequest())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={createStore({ authProvider, dataProvider, history })}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App
