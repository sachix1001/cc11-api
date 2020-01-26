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
      // .then((phoneList) => phoneList.map((number) => number.serialize()))
      .then((phoneBook) => res.status(201).json(phoneBook))
      .catch((err) => res.status(400).send(err.message));

  const listPhoneBook = (req, res) =>
    models.phoneBook
      .list()
      // .then((phoneList) => phoneList.map((number) => number.serialize()))
      .then((phoneList) => res.status(200).json(phoneList))
      .catch((err) => res.status(400).send(err.message));

  const deletePhone = (req, res) =>
    models.phoneBook
      .delete({
        first: req.params.first,
      })
      .then((phoneList) => res.status(200).json(phoneList))
      .catch((err) => res.status(400).send(err.message));

  const updatePhone = (req, res) =>
    models.phoneBook
      .update({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
      })
      .then((phone) => res.status(200).json(phone))
      .catch((err) => res.status(400).send(err.message));

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createPhoneBook);
  router.get("/", listPhoneBook);
  router.delete("/:first", deletePhone);
  router.patch("/", updatePhone);

  return router;
};
