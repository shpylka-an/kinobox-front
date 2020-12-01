import Http from '../../utils/Http'

export const actorsApi = {
  getAll() {
    return Http.get('actors')
  },
  getOne(id) {
    return Http.get(`actors/${id}`)
  },
  create(data) {
    return Http.post('movies', data)
  },
  update(id, data) {
    return Http.put(`actors/${id}`, data)
  },
  remove(id) {
    return Http.delete(`actors/${id}`)
  }
}
