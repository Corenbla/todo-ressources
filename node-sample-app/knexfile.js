module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '0.0.0.0',
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
        pool: {
            min: 2,
            max: 6,
            createTimeoutMillis: 3000,
            acquireTimeoutMillis: 30000,
            idleTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100,
            propagateCreateError: false // <- default is true, set to false
        },
    }
};
