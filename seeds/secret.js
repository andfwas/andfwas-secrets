
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secret: 'riverdale'},
        {id: 2, secret: 'ipa\'s'},
        {id: 3, secret: 'struggling with knex'}
      ]);
    });
};
