'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'last_login');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'last_login', Sequelize.DATE);
  }
};
