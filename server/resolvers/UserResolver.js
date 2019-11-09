const mongoose = require('mongoose')
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
  login () {
    return {
      user: {
        _id: mongoose.Types.ObjectId(),
        username: 'juandelacruz@gmail.com',
      },
      token: 'the-jwt-token',
    }
  },
}
