'use strict';

module.exports = function(sequelize, DataTypes){
    let user = sequelize.define("User",{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            filed: "user_id",
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        password: {
            filed: "password",
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        name: {
            filed: "name",
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt:{
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'user'
    });
    return user;
}