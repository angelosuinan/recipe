const router = require('express').Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const UserResolver = require('../resolvers/UserResolver')
const RecipeResolver = require('../resolvers/RecipeResolver')
const ReviewResolver = require('../resolvers/ReviewResolver')

const schema = buildSchema(`
  type Query {
    foo: String
    currentUser(_id: String): User
    recipe(_id: String): Recipe
    review(_id: String): Review
    recipes: [Recipe]
    reviews: [Review]
  }

  type Mutation {
    register(username: String, password: String): Auth
    login(username: String, password: String): Auth
    createRecipe(user: String, name: String): Recipe
    addReview(user: String, recipe:String, rating: String, comment: String): Review
  }

  type Auth {
    user: User
    token: String
  }

  type User {
    _id: String
    username: String
  }

  type Recipe {
    _id: String
    name: String
    user: User
    reviews: [Review]
  }

  type Review {
    _id: String
    rating: String
    comment: String
    user: User
  }
`)

const rootValue = {
  foo () {
    return 'bar'
  },
  ...UserResolver,
  ...RecipeResolver,
  ...ReviewResolver,
}

router.use(
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
)

module.exports = router
