import createStore from './createStore'
import authProvider from '../reactAdmin/authProvider'
import dataProvider from '../reactAdmin/dataProvider'
import history from '../reactAdmin/history'

export default createStore({ authProvider, dataProvider, history })