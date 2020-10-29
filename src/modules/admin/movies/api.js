import Http from '../../../utils/Http'

export function fetchAllMovies() {
  return Http.get('movies')
}

export function createNewMovie(data) {
  return Http.post('movies', data)
}

export function uploadMovie(id, files) {
  const formData = new FormData
  formData.append('preview', files.preview)
  formData.append('videoFile', files.videoFile)

  return Http.post(`movies/${id}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
