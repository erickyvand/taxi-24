'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Drivers',
			[
				{
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
