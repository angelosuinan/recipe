const router = require('express').Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    foo: String
  }
`)

const rootValue = {
  foo () {
    return 'bar'
  },
}

router.use(
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
)

module.exports = router
