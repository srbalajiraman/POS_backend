const { KnexSnakeCaseMappers } = require("objection"); // to change the word to snake case. Ex. firstName -> first_name
const config = require('../config')
// console.log("config.database", config.username)
require("dotenv").config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // database: process.env.DATABASE,
      // user: process.env.USERNAME,
      // password: process.env.PASSWORD,
      // host: process.env.HOST,
      // port: 6543

      database: "postgres",
      user: "postgres.isagabztyqymkhcswexa",
      password: "PosPMK@623707",
      host: "aws-0-ap-south-1.pooler.supabase.com",
      port: 6543
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
    debug: true
  },
  ...KnexSnakeCaseMappers
};
