const server = require('./server')
const { expect } = require('chai')
const { resolver } = require('./factory')
const spec = require('./spec')

const graphql = server
  .post('/graphql')
  .set('Accept', 'application/graphql')

describe('app', () => {
  before(() => {
    resolver.mock()
  })

  after(() => {
    resolver.restore()
  })

  describe('/', () => {
    it('returns 200', () => {
      server
        .get('/')
        .expect(200)
    })
  })

  describe('foo', () => {
    it('returns bar', () => {
      graphql
        .send({ query: spec.foobar.q })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.deep.equal(JSON.parse(spec.foobar.r))
        })
    },
    )
  })

  describe('currentUser', () => {
    it('returns a User object', () => {
      graphql
        .send({ query: spec.currentUser.q })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.deep.equal(JSON.parse(spec.currentUser.r))
        })
    })
  })
})
