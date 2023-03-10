const { DataTypes } = require("sequelize");
const { db } = require("../database/db");

//Importante colocar siempre con la primer letra mayuscula porque es un modelo
const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        enum: ['user', 'admin']
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = User