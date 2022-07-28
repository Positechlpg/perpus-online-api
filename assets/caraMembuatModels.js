const{Sequelize} = require('sequelize');
const db = require('config/db');
const products = require('../src/Model/productModel');

const{DataTypes} = Sequelize;

// Define Schema / table

const Product = db.define(
    'products',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
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
        created_at: {
            type: DataTypes.DATIME,
        },
        updated_at: {
            type: DataTypes.DATIME,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = products
