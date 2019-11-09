const User = require('../models/user')
const { getUserFromContext } = require('../utils/token')

module.exports = {
  async currentUser (_params, context) {
    const userId = getUserFromContext(context)
    const user = await User.findById(userId)

    return user
  },
  async register ({ username, password }) {
    const user = new User({
      username,
      password,
    })

    try {
      await user.save()
      return {
        user,
        token: user._id, // TODO change to JWT
      }
    } catch (err) {
      throw new Error('Mongodb', err)
    }
  },
  async login ({ username, password }) {
    const user = await User.findOne({ username })
    if (!user) {
      throw new Error('User not found')
    }
    const bool = await user.comparePassword(password)

    if (bool) {
      return {
        user,
        token: user._id,
      }
    } else {
      throw new Error('Invalid credentials')
    }
  },
}
