const Sequelize = require('sequelize');
// Connecting to mysql database called stoodent
const sequelize = new Sequelize('stoodent', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1'
  });
  
  module.exports = sequelize;