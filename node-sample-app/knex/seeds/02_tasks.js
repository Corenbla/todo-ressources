exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('task').del()
        .then(function () {
            // Inserts seed entries
            return knex('task').insert([
                {list_id: 1, title: 'Do the laundry', done: true},
                {list_id: 1, title: 'Vacuum the floors', done: false},
                {list_id: 1, title: 'Cleanup bloodstains', done: false},
                {list_id: 2, title: 'Pasta', done: false},
                {list_id: 2, title: 'Ketchup', done: false},
                {list_id: 2, title: 'Ammunition', done: false},
                {list_id: 3, title: 'Mr. Bean', done: false},
                {list_id: 3, title: 'Keanu Reeves', done: false},
                {list_id: 3, title: 'God', done: false},
            ]);
        });
};
