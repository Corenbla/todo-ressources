exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('task').del()
        .then(function () {
            // Inserts seed entries
            return knex('task').insert([
                {id: 1, list_id: 1, title: 'Do the laundry', done: true},
                {id: 2, list_id: 1, title: 'Vacuum the floors', done: false},
                {id: 3, list_id: 1, title: 'Cleanup bloodstains', done: false},
                {id: 4, list_id: 2, title: 'Pasta', done: false},
                {id: 5, list_id: 2, title: 'Ketchup', done: false},
                {id: 6, list_id: 2, title: 'Ammunition', done: false},
                {id: 7, list_id: 3, title: 'Mr. Bean', done: false},
                {id: 8, list_id: 3, title: 'Keanu Reeves', done: false},
                {id: 9, list_id: 3, title: 'God', done: false},
            ]);
        });
};
