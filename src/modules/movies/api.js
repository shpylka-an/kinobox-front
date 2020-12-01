import Http from '../../utils/Http'

export const moviesApi = {
  fetchAll(queryParams) {
    return Http.get('movies', {params: queryParams})
  },
  getOne(id) {
    return Http.get(`movies/${id}`)
  },
  create(data) {
    return Http.post('movies', data)
  },
  upload(id, files) {
    const formData = new FormData()
    formData.append('preview', files.preview)
    formData.append('videoFile', files.videoFile)

    return Http.post(`movies/${id}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  remove(id) {
    return Http.delete(`movies/${id}`)
  }
}
