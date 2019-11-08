const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = {
  currentUser () {
    return {
      _id: mongoose.Types.ObjectId(),
      username: '12',
    }
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
      throw ('Mongodb', err)
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
