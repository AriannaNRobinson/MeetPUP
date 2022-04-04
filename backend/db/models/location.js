'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  }, {});
  Location.associate = function (models) {
    // associations can be defined here
    Location.belongsTo(models.Event, { foreignKey: 'locationId' })
  };
  return Location;
};
