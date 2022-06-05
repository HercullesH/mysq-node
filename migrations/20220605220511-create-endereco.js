'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
	  cidade: {
        type: Sequelize.STRING
      },
	  bairro: {
        type: Sequelize.STRING
      },
	  rua: {
        type: Sequelize.STRING
      },
	  numero: {
        type: Sequelize.STRING
      },
	  pessoaId: {
		  allowNull: false,
		  type: Sequelize.INTEGER,
		  references: {
			  model: 'pessoas',
			  key: 'id'
		  }
	  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};