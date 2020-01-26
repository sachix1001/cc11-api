const express = require("express");

const router = express.Router();

const phoneBook = require("./phoneBook");

module.exports = (models) => {
  router.use("/phone_book", phoneBook(models));
  return router;
};
