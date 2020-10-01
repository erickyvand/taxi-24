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
					position: '3km',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Manzi',
					lastName: 'Fabrice',
					phoneNumber: '0788435609',
					location: 'Kicukiro',
					position: '10km',
					isAvailable: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: 'Kayiranga',
					lastName: 'Fred',
					phoneNumber: '0788095764',
					location: 'Kanombe',
					position: '5km',
					isAvailable: true,
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
