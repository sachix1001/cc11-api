const config = require("./config");
const knex = require("knex")(config.db);
const models = require("./models")(knex);

const data = [
  { first: "Deana", last: "Killough", phone: "(240) 215-9101" },
  { first: "Tashina", last: "Versace", phone: "(993) 430-0489" },
  { first: "Noel", last: "Jasik", phone: "(339) 825-8652" },
  { first: "Phylicia", last: "Stodola", phone: "(649) 985-4202" },
  { first: "Rachell", last: "Devries", phone: "(342) 570-7376" },
  { first: "Deonna", last: "Gemmill", phone: "(743) 497-7694" },
  { first: "Stephnie", last: "Royer", phone: "(444) 372-9626" },
];

for (let i = 0; i < data.length; i++) {
  models.phoneBook.create(data[i]);
}
