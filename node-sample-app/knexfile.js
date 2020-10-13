module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DATABASE_IP || '0.0.0.0',
            port: 5432,
            user: 'todo',
            password: 'todo',
            database: 'todo'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/knex/migrations',
        },
        seeds: {
            directory: __dirname + '/knex/seeds'
        },
    }
};
