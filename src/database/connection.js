const knex = require('knex');
const dotenv = require('dotenv').config();

const configurationJSON = {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        charset: 'utf8'
    },
    migrations: {
        directory: './src/database/migrations'
    },
    seeds: {
        directory: './src/database/seeds'
    },
    pool: {
        min: 2,
        max: 10
    }    
};

const connection = knex(configurationJSON);

module.exports = connection;