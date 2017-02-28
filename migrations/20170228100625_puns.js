
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Puns',
  function(table) {
  table.increments('id').primary();
  table.string('Pun');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Puns')
};
