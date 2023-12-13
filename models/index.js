const sequelize = require('../common/dbConnection');





const models = sequelize.models
const db = {};
db.sequelize = sequelize;

module.exports = {sequelize, models};