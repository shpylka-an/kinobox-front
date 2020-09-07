import crudProvider from '@fusionworks/ra-data-nest-crud'
import { httpClient } from './httpClient'

export default crudProvider('http://localhost:8000/api', httpClient);