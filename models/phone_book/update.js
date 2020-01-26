module.exports = (knex, PhoneBook) => {
  return (params) => {
    const { first, last, phone } = params;
    return knex("purchases")
      .where({ phone })
      .update({ first, last, phone })
      .then(() => {
        return knex("phone_book")
          .select()
          .where({ phone });
      })
      .then((updated) =>
        new PhoneBook(updated[0]).catch((err) => {
          return Promise.reject(err);
        })
      );
  };
};
