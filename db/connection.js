const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
const pg = knex(config[environment])
module.exports = pg
