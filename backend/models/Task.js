// models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
  // Define your model attributes here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  // Add other attributes as needed
}, {
    timestamps: false,
    tableName: 'tasks',
});

module.exports = Task;
