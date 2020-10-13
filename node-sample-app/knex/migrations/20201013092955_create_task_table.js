
exports.up = function(knex) {
    return knex.schema.createTable('task', (tableBuilder => {
        tableBuilder.increments();
        tableBuilder.string('title');
        tableBuilder.boolean('done');
        tableBuilder.integer('list_id').unsigned();
        tableBuilder.foreign('list_id').references('list.id').onDelete('cascade');
        tableBuilder.timestamps(true, true);
    }));
};

exports.down = function(knex) {
    knex.schema.table('task', (table) => {
        table.dropForeign(['list_id']);
    });
    return knex.schema.dropTable('task');
};
