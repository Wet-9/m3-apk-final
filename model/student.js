const Sequelize = require('sequelize');
const sequelize = require('./../../m3final/config');

const Student = sequelize.define('Student', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Student;
