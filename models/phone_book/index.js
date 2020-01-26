// const moment = require("moment");

const PhoneBook = function(dbphoneBook) {
  this.first = dbphoneBook.first;
  this.last = dbphoneBook.last;
  this.phone = dbphoneBook.phone;
};

PhoneBook.prototype.serialize = function() {
  return {
    first: this.first,
    last: this.last,
    phone: this.phone,
  };
};

module.exports = (knex) => ({
  create: require("./create")(knex, PhoneBook),
  list: require("./list")(knex, PhoneBook),
  delete: require("./delete")(knex, PhoneBook),
  update: require("./update")(knex, PhoneBook),
});
