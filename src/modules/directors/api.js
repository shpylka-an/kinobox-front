import Http from '../../utils/Http'

export const directorsApi = {
  getAll() {
    return Http.get('directors')
  },
  getOne(id) {
    return Http.get(`directors/${id}`)
  },
  create(data) {
    return Http.post('directors', data)
  },
  update(id, data) {
    return Http.put(`directors/${id}`, data)
  },
  remove(id) {
    return Http.delete(`directors/${id}`)
  }
}
