// require('dotenv').config()

// let config = {
//     database: process.env.DATABASE,
//     host: process.env.HOST,
//     username: process.env.USERNAME,
//     password: process.env.PASSWORD
// }

// module.exports = config


require('dotenv').config();

const config = {
  database: process.env.DATABASE,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
};

module.exports = config;

