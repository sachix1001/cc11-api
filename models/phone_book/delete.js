module.exports = (knex, PhoneBook) => {
  return (params) => {
    const { phone } = params;
    return knex("phone_book")
      .where({ phone })
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
