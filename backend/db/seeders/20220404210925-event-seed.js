'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: 'New Year Drinks Social',
        description: 'Getting together for some drinks before we ring in the new year!',
        date: '2022-12-31',
        capacity: '20',
        hostUserId: '3',
        locationId: '2',
        groupId: '2',
      },
      {
        name: 'Small Sunday Gathering',
        description: 'Small group meeting at the park for a relaxing afternoon puppy playdate.',
        date: '2022-09-10',
        capacity: '8',
        hostUserId: '1',
        locationId: '3',
      },
      {
        name: 'Pug Palooza!',
        description: 'Huge pug meet up!',
        date: '2022-06-04',
        hostUserId: '2',
        locationId: '3',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
