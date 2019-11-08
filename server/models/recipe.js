const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Recipe schema
 */

const RecipeSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  name: { type: String, default: '', required: true },
  // description: { type: String, default: '' },
  // ingredients: { type: String, default: '' },
  // steps: { type: String, default: '' },
  // image_url: { type: String, default: '' },

})

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

RecipeSchema.method({})

/**
 * Statics
 */

RecipeSchema.static({})

/**
 * Register
 */

module.exports = mongoose.model('Recipe', RecipeSchema)
