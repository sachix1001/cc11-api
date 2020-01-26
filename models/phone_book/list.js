module.exports = (knex, PhoneBook) => {
  return () => {
    return knex("phone_book")
      .select()
      .then((list) => {
        if (list.length) {
          const result = [];
          for (const elm of list) {
            result.push(new PhoneBook(elm));
          }
          return result;
        }
        throw new Error(`Error from list`);
      });
  };
};
