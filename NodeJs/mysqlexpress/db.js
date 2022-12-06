const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(process.env.DATABASE,process.env.username,process.env.Password,{
    host: process.env.HOST,
    dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });