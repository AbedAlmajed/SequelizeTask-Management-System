const dbConfig = require('../config/config.json');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
    operatorsAliases: false,
    pool: dbConfig.development.pool // Use the pool configuration
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./task.model.js')(sequelize, Sequelize);

module.exports = db;
