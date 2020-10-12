import crudProvider from 'ra-data-nestjsx-crud'
import { httpClient } from './httpClient'
import Http from '../utils/Http'

const dataProvider = crudProvider('http://localhost:8000/api', httpClient)

const myDataProvider = {
  ...dataProvider,
}

export default myDataProvider
