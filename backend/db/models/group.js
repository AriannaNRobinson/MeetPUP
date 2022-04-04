'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING
  }, {});
  Group.associate = function (models) {
    // associations can be defined here
    Group.hasMany(models.Event, { foreignKey: 'groupId' })
    Group.belongsToMany(models.User, {
      through: 'UserGroup',
      otherKey: 'userId',
      foreignKey: 'groupId'
    })
  };
  return Group;
};
