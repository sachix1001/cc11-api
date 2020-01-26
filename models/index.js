module.exports = function(knex) {
  return {
    phoneBook: require("./phone_book")(knex),
  };
};
