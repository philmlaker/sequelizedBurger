
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define('Customers', {
   customer_name: DataTypes.STRING,

  }, {
timestamps: false
  });
  return Customers;
};


