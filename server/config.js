const mongoose = require('mongoose')

// database configs

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb/recipe'

// Temporary default
mongoose.set('debug', true)

async function connectToDatabase () {
  try {
    await mongoose.connect(
      MONGODB_URI,
      { autoIndex: false, useNewUrlParser: true },
    )
    console.log(`Successfully connected to database.`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const disconnectToDatabase = () => {
  mongoose.connection.db.dropDatabase()
  mongoose.connection.close()
}

module.exports = {
  connectToDatabase,
  disconnectToDatabase,
}
