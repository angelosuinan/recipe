const sinon = require('sinon')
const spec = require('./spec')
const UserResolver = require('../server/resolvers/UserResolver')

const resolver = {
  mock: () => {
    sinon.mock(UserResolver)
      .expects('currentUser')
      .returns(Promise.resolve(spec.user))
  },

  restore: () => {
    sinon.restore()
  },
}

module.exports = {
  resolver,
}
