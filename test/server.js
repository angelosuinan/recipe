const app = require('../server/app')
const request = require('supertest')

module.exports = request(app)
