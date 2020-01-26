exports.up = function(knex, Promise) {
  return knex.schema.createTable("phone_book", (t) => {
    t.increments().index();
    t.string("first", 100);
    t.string("last", 100);
    t.string("phone", 100).unique().notNullable;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("phone_book");
};
