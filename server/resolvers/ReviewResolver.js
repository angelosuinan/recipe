const mongoose = require('mongoose')

module.exports = {
  review () {
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
  reviews () {
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
  addReview () {
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
