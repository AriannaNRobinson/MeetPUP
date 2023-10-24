'use strict';

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
        // new
        options.tableName = 'Groups';
        // end
    
        // the below used to say "Groups" instead of options
    return queryInterface.bulkInsert(options, [
      {
        name: 'Extreme Hikers!',
        description: 'This is a group for extremely active dog owners. We frequently go on 5 mile walks & hikes on the weekends. We like to stay as active as our pups!'
      },
      {
        name: 'Social Group',
        description: 'Are you looking to chat and make friends while your dogs play together? This is the group for you! We are laid back group with the goal of making friends with other dog lovers!'
      },
      {
        name: 'Shiba Squad!',
        description: 'Do you own a Shiba inu? We do! We love coordinating gatherings with our favorite shibas & humans, socializing, and more!'
      },
      {
        name: 'PUG Lyfe!',
        description: 'Join us for the ultimate PUG meetups!'
      },
      {
        name: 'High Energy Dog Owners',
        description: 'Does your dog have more energy than you know how to handle? Come meet up with us. We plan large events at large dog parks to help tucker your doggos out!'
      },
      {
        name: 'Tiny Dog Owners',
        description: 'I started this group because my chihuahua does not do well with bigger dogs. I discovered a lot of small dogs are scared of bigger dogs, so this is the perfect group for your little pup! We plan small meet ups for dogs 25lbs and under!'
      },
      {
        name: 'Great Danes are the BEST',
        description: 'We plan meet ups with all of the coolest great danes in town. No more having to warn owners that your dog will not hurt their dog, and that he is just large. Let him play with other dogs that are his size!'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
        // new
        options.tableName = 'Groups';
        // end
    
        // the below used to say "Groups" instead of options
    return queryInterface.bulkDelete(options, null, {});
  }
};
