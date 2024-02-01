"use strict";

module.exports = async function (app, opts) {
  app.get("/:selCurr/:newCurr", async function (request, reply) {
    const rate = app.convert(request.params.selCurr, request.params.newCurr);
    return rate;
  });
};
