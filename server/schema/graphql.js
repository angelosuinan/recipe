const router = require('express').Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const User = require('../resolvers/User')
const Recipe = require('../resolvers/Recipe')
const Review = require('../resolvers/Review')

const schema = buildSchema(`
  type Query {
    foo: String
    user(_id: String): User
    recipe(_id: String): Recipe
    review(_id: String): Review
    recipes: [Recipe]
    reviews: [Review]
  }

  type Mutation {
    register(email: String, password: String): User
    login(email: String, password: String): Auth
    createRecipe(user: String, name: String): Recipe
    addReview(user: String, recipe:String, rating: String, comment: String): Review
  }

  type Auth {
    user: User
    token: String
  }

  type User {
    _id: String
    email: String
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

  // query
  user: User.find,
  recipe: Recipe.find,
  recipes: Recipe.list,
  review: Review.find,
  reviews: Review.list,

  // mutations
  register: User.register,
  login: User.login,
  createRecipe: Recipe.create,
  addReview: Review.add,
}

router.use(
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
)

module.exports = router
