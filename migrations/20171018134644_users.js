
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments()
      table.string('username')
      table.string('email')
      table.integer('code')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
