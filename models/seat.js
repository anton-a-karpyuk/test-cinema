'use strict';
module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define('Seat', {
        seatNumber: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {tableName: 'seats'});
    Seat.associate = function (models) {
        // associations can be defined here
    };
    return Seat;
};



