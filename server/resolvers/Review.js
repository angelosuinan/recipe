const mongoose = require('mongoose')

module.exports = {
  find () {
    return {
      _id: mongoose.Types.ObjectId(),
      comment: 'Its delicious',
      rating: '4',
      user: {
        _id: mongoose.Types.ObjectId(),
        email: 'Chef_boy',
      },
    }
  },
  list () {
    return [
      {
        _id: mongoose.Types.ObjectId(),
        comment: 'Its delicious',
        rating: '4',
        user: {
          _id: mongoose.Types.ObjectId(),
          email: 'Chef_boy',
        },
      },
    ]
  },
  add () {
    return {
      _id: mongoose.Types.ObjectId(),
      comment: 'Its delicious',
      rating: '4',
      user: {
        _id: mongoose.Types.ObjectId(),
        email: 'Chef_boy',
      },
    }
  },
}
