const sequelize = require("sequelize")
const db = require ('../config/db');

const {DataTypes} = sequelize;

const Users = db.define
(
    'users',
    {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        username: {
            type : DataTypes.STRING,
        },

        full_name : {
            type : DataTypes.STRING,
        },

        email : {
            type : DataTypes.STRING,
          
        },

        password : {
            type : DataTypes.STRING,
        },
        Image : {
            type : DataTypes.STRING,
            
        },
        status : {
            type : DataTypes.STRING,
          
        },

        role : {
            type : DataTypes.STRING,
            
        },

        npm : {
            type : DataTypes.STRING,
            
        },

        createdAt : {
            field: 'created_at',
            type : DataTypes.DATE,
            
        },

        updatedAt : {
            field: 'updated_at',
            type : DataTypes.DATE,
            
        },
    },  

        {
            freezeTableName : true,
        
        }
    
)


module.exports = Users;