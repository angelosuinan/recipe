const mongoose = require('mongoose')

const Review = require('../models/review')
const Recipe = require('../models/recipe')
const { getUserFromContext } = require('../utils/token')

module.exports = {
  async review (params) {
    const { _id } = params
    const review = await Review
      .findOne({ _id })
      .populate('user')

    return review
  },

  async reviewsByCurrentUser (_params, context) {
    const userId = getUserFromContext(context)

    const reviews = await Review.find({ user: userId })

    return reviews
  },
  async addReview (params, context) {
    const userId = getUserFromContext(context)
    const { rating, comment, recipe: recipeId } = params
    const review = Review({
      user: userId,
      rating,
      comment,
    })

    // find the recipe to add a review
    const recipe = await Recipe.findOne({ _id: recipeId })
    // save review
    await review.save()
    // add to a the recipe
    recipe.reviews.push(review)
    // save the rceipe
    await recipe.save()
    return review
  },
}
