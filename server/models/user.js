const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
const uniqueValidator = require('mongoose-unique-validator')

/**
 * User schema
 */

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
UserSchema.pre('save', function (next) {
  var user = this

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})

/**
 * Plugins
 */
UserSchema.plugin(uniqueValidator)
/**
 * Methods
 */

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const bool = await bcrypt.compare(candidatePassword, this.password)
  return bool
}

/**
 * Statics
 */
UserSchema.static({})

/**
 * Register
 */

module.exports = mongoose.model('User', UserSchema)
