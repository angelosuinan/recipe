const mongoose = require('mongoose')

module.exports = {
  find () {
    return {
      _id: mongoose.Types.ObjectId(),
      email: '12',
    }
  },
  register () {
    return {
      _id: mongoose.Types.ObjectId(),
      email: 'juandelacruz@gmail.com',
    }
  },
  login () {
    return {
      user: {
        _id: mongoose.Types.ObjectId(),
        email: 'juandelacruz@gmail.com',
      },
      token: 'the-jwt-token',
    }
  },
}
