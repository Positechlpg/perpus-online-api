const {Sequelize} = require('Sequelize');
const db = require('../config/db');

const {DataTypes} = Sequelize;

// Define Schema / table

const products = db.define(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name:{
            type: DataTypes.STRING, // di database varchar()
        },
        stock: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING, // di database varchar()
        },
        createdAt: {
            failed: 'created_at',
            type: DataTypes.DATE,
        },
        updateAt: {
            failed: 'update_at',
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = products;