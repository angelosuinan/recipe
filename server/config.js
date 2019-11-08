const mongoose = require('mongoose')

// database configs

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb/recipe'

// Temporary default
mongoose.set('debug', true)

async function connectToDatabase () {
  try {
    await mongoose.connect(
      MONGODB_URI,
      { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true },
    )
    console.log(`Successfully connected to database.`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const disconnectToDatabase = (done) => {
  mongoose.connection.db.dropDatabase(function () {
    mongoose.connection.close(done)
  })
}

module.exports = {
  connectToDatabase,
  disconnectToDatabase,
}
