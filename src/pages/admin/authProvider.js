const authProvider = {
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions')
    return role ? Promise.resolve() : Promise.reject()
  },
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('permissions')
    return Promise.resolve('/')
  }
}

export default authProvider
