
module.exports = {
        client: 'postgresql',
        connection: {
          database: 'demo',
          user:     'postgres',
          password: '123456'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
};


/**
 * 
 * 
module.exports = {

  development:{
        client: 'postgresql',
        connection: {
          database: 'demo',
          user:     'postgres',
          password: '123456'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
    },
    production:{
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

};

 * 


na pasta de sincronia knex

const environment_dev  = process.env.NODE_ENV     || 'development'
const environment_prod = process.env.DATABASE_URL || 'production'
const db   = require('./knexfile')[environment_dev]
 * 
 */