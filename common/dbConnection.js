const { Sequelize } = require('sequelize');
const config = require('../config');

const database = new Sequelize(config.db);

database.authenticate().then(() => {
  console.log("Database connected")
}).catch((error) => {console.log(error)
});

module.exports = database;