'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Trip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Trip.hasMany(models.Invoice, {
				foreignKey: 'tripId',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	Trip.init(
		{
			tripId: DataTypes.INTEGER,
			driverId: DataTypes.INTEGER,
			riderId: DataTypes.INTEGER,
			originId: DataTypes.INTEGER,
			destinationId: DataTypes.INTEGER,
			departureDate: DataTypes.DATE,
			amount: DataTypes.DOUBLE,
			status: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Trip',
		}
	);
	return Trip;
};
