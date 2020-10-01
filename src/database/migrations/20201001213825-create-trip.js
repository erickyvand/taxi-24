'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Trips', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			tripId: {
				type: Sequelize.INTEGER,
			},
			driverId: {
				type: Sequelize.INTEGER,
			},
			riderId: {
				type: Sequelize.INTEGER,
			},
			originId: {
				type: Sequelize.INTEGER,
			},
			destinationId: {
				type: Sequelize.INTEGER,
			},
			departureDate: {
				type: Sequelize.DATE,
			},
			status: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Trips');
	},
};
