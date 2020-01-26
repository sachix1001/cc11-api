module.exports = (knex, PhoneBook) => {
  return async (params) => {
    // INSERT INTO phone_book(first, last, phone) VALUES(${params.first}, ${params.last}, ${params.phone})
    await knex("phone_book").insert({
      first: params.first,
      last: params.last,
      phone: params.phone,
    });

    // SELECT * FROM phone_book WHERE first = ? AND last = ?
    const result = await knex("phone_book").where({
      first: params.first,
      last: params.last
    }).select();
    return new PhoneBook(result.pop());

    // return knex("phone_book")
    //   .insert({
    //     first: params.first,
    //     last: params.last,
    //     phone: params.phone,
    //   }).then(() => {
    //     return knex("phone_book").where({
    //       first: params.first,
    //       last: params.last
    //     }).select();
    //   })
    //   .then((list) => {
    //     if (list.length) {
    //       const result = [];
    //       for (const elm of list) {
    //         result.push(new PhoneBook(elm));
    //       }
    //       console.log(result);
    //       return result.pop();
    //     }
    //     throw new Error(`Error from create`);
    //   });
      // .catch((err) => {
      //   return Promise.reject(err);
      // });
  };
};
