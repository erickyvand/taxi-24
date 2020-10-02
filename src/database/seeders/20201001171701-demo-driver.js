'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Drivers',
			[
				{
					riderId: 1,
					locationId: 1,
					firstName: 'John',
					lastName: 'Doe',
					position: 3,
					phoneNumber: '0788564756',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 2,
					locationId: 2,
					firstName: 'Manzi',
					lastName: 'Fabrice',
					position: 2,
					phoneNumber: '0788435609',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					locationId: 1,
					firstName: 'Kayiranga',
					lastName: 'Fred',
					position: 1,
					phoneNumber: '0788095764',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					locationId: 6,
					firstName: 'Ngirinshuti',
					lastName: 'Hamza',
					position: 4,
					phoneNumber: '0788049581',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					locationId: 1,
					firstName: 'Munana',
					lastName: 'Jean',
					position: 2,
					phoneNumber: '0788398252',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 3,
					locationId: 5,
					firstName: 'Habarurema',
					lastName: 'Moussa',
					position: 6,
					phoneNumber: '0788486794',
					isAvailable: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Drivers', null, {});
	},
};
