'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
    name: DataTypes.STRING,
    Address: DataTypes.STRING,
    Dob: DataTypes.DATE,
    Email: DataTypes.STRING,
    number: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};