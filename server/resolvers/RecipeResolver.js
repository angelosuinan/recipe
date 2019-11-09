const Recipe = require('../models/recipe')
const { getUserFromContext } = require('../utils/token')

module.exports = {
  async recipe (params) {
    const recipe = await Recipe
      .findOne({ _id: params.id })
      .populate('user')
      .populate('reviews')

    return recipe
  },

  async recipes (params) {
    const { search } = params

    const recipes = await Recipe
      .find({ 'name': { '$regex': search, '$options': 'i' } })
      .populate('user')
      .populate('review')

    return recipes
  },
  async createRecipe (params, context) {
    const userId = getUserFromContext(context)

    const recipe = new Recipe({
      user: userId,
      ...params,
    })

    const savedRecipe = await recipe.save()

    try {
      const recipe = await Recipe
        .findOne({ _id: savedRecipe._id })
        .populate('user')
        .exec()

      return recipe
    } catch (err) {
      throw new Error('MongoDB Error' + err)
    }
  },

  async recipesByCurrentUser (_params, context) {
    const userId = getUserFromContext(context)

    const recipe = await Recipe
      .find({ user: userId })
      .populate('user')
      .populate('review')

    return recipe
  },
}
