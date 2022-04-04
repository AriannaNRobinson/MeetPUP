'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    capacity: DataTypes.INTEGER,
    hostUserId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
    Event.hasMany(models.RSVP, { foreignKey: 'eventId' })
    Event.belongsTo(models.User, { foreignKey: 'hostUserId' })
    Event.belongsTo(models.Location, { foreignKey: 'locationId' })
    Event.belongsTo(models.Group, { foreignKey: 'groupId' })
  };
  return Event;
};
