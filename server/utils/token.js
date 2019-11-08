module.exports = {
  getUserFromContext (context) {
    let token = context.headers['authorization'] // Express headers are auto converted to lowercase
    token = token.slice(7, token.length)
    return token
  },
}
