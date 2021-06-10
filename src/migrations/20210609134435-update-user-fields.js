'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return Promise.all([
     queryInterface.renameColumn('Users', 'name', 'first_name'),
     queryInterface.addColumn('Users', 'last_name', Sequelize.STRING),
   ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('Users', 'first_name', 'name'),
      queryInterface.removeColumn('Users', 'last_name'),
    ])
  }
};
