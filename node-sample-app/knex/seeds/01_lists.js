
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list').del()
    .then(function () {
      // Inserts seed entries
      return knex('list').insert([
        {id: 1, title: 'Chores'},
        {id: 2, title: 'Groceries'},
        {id: 3, title: 'Hit list'},
      ]);
    });
};
