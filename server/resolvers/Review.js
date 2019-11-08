const mongoose = require('mongoose')

module.exports = {
  find () {
    return {
      _id: mongoose.Types.ObjectId(),
      comment: 'Its delicious',
      rating: '4',
      user: {
        _id: mongoose.Types.ObjectId(),
        username: 'Chef_boy',
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
          username: 'Chef_boy',
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
        username: 'Chef_boy',
      },
    }
  },
}
