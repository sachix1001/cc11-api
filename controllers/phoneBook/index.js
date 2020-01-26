const express = require("express");
const config = require("../../config");
const knex = require("knex")(config.db);

module.exports = (models) => {
  /**
   * Controller Logic
   */
  const createPhoneBook = (req, res) =>
    models.phoneBook
      .create({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
      })
      .then((phoneBook) => res.status(201).json(phoneBook.serialize()))
      .catch((err) => res.status(400).send(err.message));

  const listPhoneBook = (req, res) =>
    models.phoneBook
      .list()
      .then((phoneList) => phoneList.map((number) => number.serialize()))
      .then((phoneList) => res.status(200).json(phoneList))
      .catch((err) => res.status(400).send(err.message));

  const deletePhone = (req, res) =>
    models.phoneBook
      .delete({
        phone: req.params.phone,
      })
      .then((phoneList) => res.status(200).json(phoneList))
      .catch((err) => res.status(400).send(err.message));

  const updatePhone = (req, res) =>
    models.phoneBook
      .update({
        first: req.params.first,
        last: req.params.last,
        phone: req.params.phone,
      })
      .then((phone) => res.status(200).json(phone))
      .catch((err) => res.status(400).send(err.message));

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createPhoneBook);
  router.get("/", listPhoneBook);
  router.delete("/:phone", deletePhone);
  router.patch("/:phone", updatePhone);

  return router;
};
