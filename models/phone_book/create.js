module.exports = (knex, PhoneBook) => {
  return (params) => {
    return knex("phone_book")
      .insert({
        first: params.first,
        last: params.last,
        phone: params.phone,
      })
      .then(() => {
        return knex("phone_book").where({
          phone: params.phone,
        });
      })
      .then((phoneBook) => {
        return [new PhoneBook(phoneBook.pop())];
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
};
