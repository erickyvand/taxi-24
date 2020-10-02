'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Drivers',
			[
				{
					riderId: 1,
					firstName: 'John',
					lastName: 'Doe',
					phoneNumber: '0788564756',
					location: 'Gisozi',
					position: 3,
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 2,
					firstName: 'Manzi',
					lastName: 'Fabrice',
					phoneNumber: '0788435609',
					location: 'Kicukiro',
					position: 10,
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					firstName: 'Kayiranga',
					lastName: 'Fred',
					phoneNumber: '0788095764',
					location: 'Kanombe',
					position: 5,
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					firstName: 'Ngirinshuti',
					lastName: 'Hamza',
					phoneNumber: '0788049581',
					location: 'Nyamirambo',
					position: 2,
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 1,
					firstName: 'Munana',
					lastName: 'Jean',
					phoneNumber: '0788398252',
					location: 'Gisozi',
					position: 1,
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					riderId: 3,
					firstName: 'Habarurema',
					lastName: 'Moussa',
					phoneNumber: '0788486794',
					location: 'Nyamirambo',
					position: 2,
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
