'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('pessoa_seguidores', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			pessoaId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'pessoas',
					key: 'id'
				}
			},
			seguePessoaId: {
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
		await queryInterface.dropTable('pessoa_seguidores');
	}
};