'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('Users', 'first_name', 'firstName'),
      queryInterface.renameColumn('Users', 'last_name', 'lastName')
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'first_name', Sequelize.STRING),
      queryInterface.addColumn('Users', 'last_name', Sequelize.STRING)
    ])
  }
};
