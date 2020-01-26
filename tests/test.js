/* eslint-disable no-console */
const { expect, assert } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const models = require("../models")(knex);

const forcePromiseReject = () => {
  throw new Error("This promise should have failed, but did not.");
};

describe("phone_book", () => {
  describe("setup", () => {
    it("able to connect to database", () =>
      knex
        .raw("select 1+1 as result")
        .catch(() => assert.fail("unable to connect to db")));

    it("has run the initial migrations", () =>
      knex("phone_book")
        .select()
        .catch(() => assert.fail("users table is not found.")));
  });

  describe("#create", () => {
    const params = { first: "", last: "grannan", phone: "0123 24 4530" };

    context("when good params are given", () => {
      before(() => {
        params.first = "sachi";
      });

      // afterEach(() => knex("phone_book").del());

      it("creates a new person", () =>
        models.phoneBook.create(params).then((person) => {
          expect(person[0]).to.include({ first: params.first });
          expect(person[0].phone).to.be.a("string");
        }));
    });
  });

  describe("#list", () => {
    const numbers = ["1234", "5678"];
    const persons = numbers.map((phone) => ({ phone }));
    before(() => Promise.all(persons.map(models.phoneBook.create)));
    // after(() => knex("phone_book").del());
    console.log(models);
    it("lists all users", () =>
      models.phoneBook.list().then((resp) => {
        console.log(resp);
        expect(numbers).to.include(resp[0].phone);
        expect(numbers).to.include(resp[1].phone);
      }));

    // it("returns serializable objects", () =>
    //   models.users.list().then((resp) => {
    //     expect(resp[0].serialize).to.be.a("function");
    //     expect(resp[0].serialize().id).to.be.a("number");
    //     expect(resp[0].serialize().username).to.be.a("string");
    //   }));
  });
});
