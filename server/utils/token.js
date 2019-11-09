module.exports = {
  getUserFromContext (context) {
    let token = context.headers['authorization'] // Express headers are auto converted to lowercase
    if (!token) throw new Error('Unauthorized access')
    token = token.slice(7, token.length)
    return token
  },
}
