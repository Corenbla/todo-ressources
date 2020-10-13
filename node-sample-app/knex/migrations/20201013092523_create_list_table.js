exports.up = function (knex) {
    return knex.schema.createTable('list', (tableBuilder => {
        tableBuilder.increments();
        tableBuilder.string('title');
        tableBuilder.timestamps();
    }));
};

exports.down = function (knex) {
    return knex.schema.dropTable('list');
};
