const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * Recipe schema
 */

const ReviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: { type: Number },
  comment: { type: String, default: '' },
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

ReviewSchema.method({})

/**
 * Statics
 */

ReviewSchema.static({})

/**
 * Register
 */

module.exports = mongoose.model('Review', ReviewSchema)
