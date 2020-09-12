import crudProvider from 'ra-data-nestjsx-crud'
import { httpClient } from './httpClient'
import Http from '../utils/Http'

const dataProvider = crudProvider('http://localhost:8000/api', httpClient)

const myDataProvider = {
  ...dataProvider,
  create: (resource, params) => {
    if (!params.data.preview && !params.data.video) {
      return dataProvider.create(resource, params)
    }

    const formData = new FormData()

    if (params.data.preview) {
      formData.append('preview', params.data.preview.rawFile)
      delete params.data.preview
    }

    if (params.data.video) {
      formData.append('movie', params.data.video.rawFile)
      delete params.data.video
    }

    Http.post('movies/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      alert('Uploaded')
    })

    return dataProvider.create(resource, params).then(response => {
      console.log(response)
    })
  },
}

export default myDataProvider
