module.exports = (knex, PhoneBook) => {
  return (params) => {
    const { first } = params;
    return knex("phone_book")
      .where({ first})
      .del()
      .then(() => {
        return knex("phone_book").select();
      })
      .then((list) => {
        if (list.length) {
          const result = [];
          for (const elm of list) {
            result.push(new PhoneBook(elm));
          }
          return result;
        }
        throw new Error(`Error`);
      });
  };
};
