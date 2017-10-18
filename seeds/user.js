
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Andy Smart', email: 'me@myself.org', code: '1948573645'}
      ]);
    });
};
