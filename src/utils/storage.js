module.exports = {
  removeToken () {
    localStorage.removeItem('token')
  },

  getToken () {
    return localStorage.getItem('token')
  },

  setToken (token) {
    if (!token) {
      throw new Error('invalid token')
    }

    localStorage.setItem('token', token)
  },
}
