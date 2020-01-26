module.exports = (knex, PhoneBook) => {
  return async (params) => {
    const { first, last, phone } = params;
    await knex("phone_book")
    .where({phone})
    .update({first, last})
    .then(() => {
      return knex("phone_book")
      .select()
      .where({phone});
    });

    const result = await knex("phone_book")
    .where({phone})
    .select();
    return new PhoneBook(result.pop());


    // return knex("phone_book")
    //   .where({ phone })
    //   .update({ first, last})
    //   .then(() => {
    //     return knex("phone_book")
    //       .select()
    //       .where({ phone });
    //   })
    //   .then((updated) =>
    //     new PhoneBook(updated[0])
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     })
    //   );
  };
};
