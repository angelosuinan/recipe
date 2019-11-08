const mongoose = require('mongoose')

module.exports = {
  currentUser () {
    return {
      _id: mongoose.Types.ObjectId(),
      username: '12',
    }
  },
  register () {
    return {
      _id: mongoose.Types.ObjectId(),
      username: 'juandelacruz@gmail.com',
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
