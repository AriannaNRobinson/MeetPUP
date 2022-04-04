'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        name: 'Conestee Dog Park',
        address: '840 Mauldin Rd',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29607'
      },
      {
        name: 'Off The Chain Dog Park Bar',
        address: '201 Murray Dr',
        city: 'Mauldin',
        state: 'South Carolina',
        zipCode: '29662'
      },
      {
        name: 'Pavilion Dog Park',
        address: '400 Scottswood Rd',
        city: 'Taylors',
        state: 'South Carolina',
        zipCode: '29687'
      },
      {
        name: 'Falls Park on the Reedy',
        address: '601 S Main St',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29601'
      },
      {
        name: 'Swamp Rabbit Trail',
        address: '103 McDaniel Ave',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29601'
      },
      {
        name: 'Fernwood Nature Trail in Cleveland Park',
        address: 'Cleveland Park Dr & East Washington',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29601'
      },
      {
        name: 'Paris Mountain State Park',
        address: '2401 State Park Rd',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29609'
      },
      {
        name: 'Legacy Park',
        address: '336 Rocky Slope Rd',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29607'
      },
      {
        name: 'Timmons Park',
        address: '121 Oxford St',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29607'
      },
      {
        name: 'Southside Park',
        address: '417 Baldwin Rd',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29607'
      },
      {
        name: 'Pelham Mill Park',
        address: '2270 E Phillips Rd',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29615'
      },
      {
        name: 'Edgewood Bark Park',
        address: '107 Meadow Wood Dr',
        city: 'Greenville',
        state: 'South Carolina',
        zipCode: '29615'
      },
      {
        name: 'Rail Tail Dog Park',
        address: '827 Union St',
        city: 'Spartanburg',
        state: 'South Carolina',
        zipCode: '29302'
      },
      {
        name: 'The Dog Park',
        address: '415 N Fant St',
        city: 'Anderson',
        state: 'South Carolina',
        zipCode: '29621'
      },
      {
        name: 'City Park',
        address: '198 Park Dr',
        city: 'Simpsonville',
        state: 'South Carolina',
        zipCode: '29681'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
