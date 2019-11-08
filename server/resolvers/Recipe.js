const mongoose = require('mongoose')

module.exports = {
  recipe () {
    return {
      _id: mongoose.Types.ObjectId(),
      user: {
        _id: mongoose.Types.ObjectId(),
        username: 'ako ito',
      },
      name: 'Adobong Manok',
      reviews: [{
        _id: 2,
        rating: '4',
        comment: 'Matsalap',
        user: {
          _id: 5,
          username: 'StarLord',
        },
      }, {
        _id: 2,
        rating: '4',
        comment: 'Tastyy',
        user: {
          _id: 5,
          username: 'Chef boy',
        },
      }],
    }
  },
  recipes () {
    return [
      {
        _id: mongoose.Types.ObjectId(),
        user: {
          _id: mongoose.Types.ObjectId(),
          username: 'ako ito',
        },
        name: 'Adobong Manok',
        reviews: [{
          _id: 2,
          rating: '4',
          comment: 'Matsalap',
          user: {
            _id: 5,
            username: 'StarLord',
          },
        }, {
          _id: 2,
          rating: '4',
          comment: 'Tastyy',
          user: {
            _id: 5,
            username: 'Chef boy',
          },
        }],
      },
    ]
  },
  createRecipe () {
    return {
      _id: mongoose.Types.ObjectId(),
      author: mongoose.Types.ObjectId(),
      user: {
        _id: mongoose.Types.ObjectId(),
        username: 'ako ito',
      },
      name: 'Adobong Manok',
      reviews: [{
        _id: 2,
        rating: '4',
        comment: 'Matsalap',
        user: {
          _id: 5,
          username: 'StarLord',
        },
      }, {
        _id: 2,
        rating: '4',
        comment: 'Tastyy',
        user: {
          _id: 5,
          username: 'Chef boy',
        },
      }],
    }
  },
}
