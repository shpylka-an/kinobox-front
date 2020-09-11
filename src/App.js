import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'
import { authCheckRequest } from './actions/auth'
import store from './store'
import { ConnectedRouter } from 'connected-react-router'
import history from './reactAdmin/history'
import {
  AuthContext,
  DataProviderContext,
  TranslationProvider,
  Resource,
  Notification,
} from 'react-admin'
import dataProvider from './reactAdmin/dataProvider'
import authProvider from './reactAdmin/authProvider'
import withContext from 'recompose/withContext'
import PropTypes from 'prop-types'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import defaultMessages from 'ra-language-english'

const theme = createMuiTheme()

const i18nProvider = polyglotI18nProvider((locale) => {
  return defaultMessages
})

store.dispatch(authCheckRequest())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <TranslationProvider locale="en" i18nProvider={i18nProvider}>
          <AuthContext.Provider value={authProvider}>
            <DataProviderContext.Provider value={dataProvider}>
              <ConnectedRouter history={history}>
                <Resource name="movies" intent="registration" />
                <Routes />
                <Notification />
              </ConnectedRouter>
            </DataProviderContext.Provider>
          </AuthContext.Provider>
        </TranslationProvider>
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default withContext({ authProvider: PropTypes.object }, () => ({
  authProvider,
}))(App)
