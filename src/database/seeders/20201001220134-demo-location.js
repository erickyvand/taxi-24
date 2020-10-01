'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Locations',
			[
				{
					locationName: 'Nzove',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					locationName: 'Nyakabanda',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					locationName: 'Kanyinya',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					locationName: 'Gasogi',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					locationName: 'Niboye',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Locations', null, {});
	},
};
