const sequelize = require('../common/dbConnection');
const user = require('./schemas/userSchemas')




const models = sequelize.models
const db = {};
db.sequelize = sequelize;

module.exports = {sequelize, models};