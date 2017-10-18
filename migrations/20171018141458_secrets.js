
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('secrets', (table) => {
      table.increments()
      table.string('secret')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('secrets')
};
