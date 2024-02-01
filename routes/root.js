"use strict";

module.exports = async function (app, opts) {
  app.get("/", async function (request, reply) {
    const currencies = await app.getCurrencies();
    reply.code(200).send(currencies);
  });
};
