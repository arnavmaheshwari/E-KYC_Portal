const pgp = require('pg-promise')()

const db = pgp('postgres://postgres:postgres@localhost:5432/e_kycdb')

module.exports = db