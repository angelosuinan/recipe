const server = require('./server')
const { expect } = require('chai')

const { connectToDatabase, disconnectToDatabase } = require('../server/config')

const graphql = server
  .post('/graphql')
  .set('Accept', 'application/graphql')

describe('app', () => {
  beforeEach(() => {
    connectToDatabase()
  })
  afterEach(() => {
    disconnectToDatabase()
  })

  describe('/', () => {
    it('returns 200', () =>
      server
        .get('/')
        .expect(200),
    )
  })

  describe('foo', () => {
    it('returns bar', () =>
      graphql
        .send({ query: `
          query {
            foo
          }
          `,
        })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.deep.equal(JSON.parse(`
          {
            "data": {
              "foo": "bar"
            }
          }
          `,
          ))
        }),
    )
  })
})
