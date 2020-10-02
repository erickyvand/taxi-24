'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Drivers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			riderId: {
				type: Sequelize.INTEGER,
			},
			locationId: {
				type: Sequelize.INTEGER,
			},
			firstName: {
				type: Sequelize.STRING,
			},
			lastName: {
				type: Sequelize.STRING,
			},
			position: {
				type: Sequelize.INTEGER,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			isAvailable: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Drivers');
	},
};
