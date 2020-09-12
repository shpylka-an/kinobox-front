import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import withContext from 'recompose/withContext'
import { ConnectedRouter } from 'connected-react-router'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import {
  AuthContext,
  DataProviderContext,
  Notification,
  Resource,
  TranslationProvider,
} from 'react-admin'

import Routes from './routes'
import { authCheckRequest } from './actions/auth'
import store from './store'
import history from './reactAdmin/history'
import dataProvider from './reactAdmin/dataProvider'
import authProvider from './reactAdmin/authProvider'
import i18nProvider from './reactAdmin/i18nProvider'

const theme = createMuiTheme()

store.dispatch(authCheckRequest())

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <TranslationProvider locale="en" i18nProvider={i18nProvider}>
        <AuthContext.Provider value={authProvider}>
          <DataProviderContext.Provider value={dataProvider}>
            <ConnectedRouter history={history}>
              <Resource name="movies" hasEdit={true} intent="registration" />
              <Routes />
              <Notification />
            </ConnectedRouter>
          </DataProviderContext.Provider>
        </AuthContext.Provider>
      </TranslationProvider>
    </Provider>
  </MuiThemeProvider>
)

export default withContext({ authProvider: PropTypes.object }, () => ({
  authProvider,
}))(App)
