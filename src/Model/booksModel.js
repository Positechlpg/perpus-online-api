const {Sequelize} = require('Sequelize');
const db = require('../config/db');

const {DataTypes} = Sequelize;

// Define Schema / table

const products = db.define(
    'books',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
        }, 
        title:{
            type: DataTypes.STRING, // di database varchar()
        },
        description: {
            type: DataTypes.STRING, // di database varchar()
        },
        author: {
            type: DataTypes.STRING, // di database varchar()
        },
        image: {
            type: DataTypes.STRING, // di database varchar()
        },
        code: {
            type: DataTypes.STRING, // di database varchar()
        },
        status: {
            type: DataTypes.STRING, // di database varchar()
        },
        category: {
            type: DataTypes.STRING, // di database varchar()
        },
        publication_year: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = products;