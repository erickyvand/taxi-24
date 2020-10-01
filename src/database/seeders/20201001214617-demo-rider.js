'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Riders',
			[
				{
					firstName: 'Muhire',
					lastName: 'Faustin',
					phoneNumber: '0788485092',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Karambizi',
					lastName: 'Philip',
					phoneNumber: '0788109238',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Mico',
					lastName: 'Aimable',
					phoneNumber: '0788485828',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Riders', null, {});
	},
};
