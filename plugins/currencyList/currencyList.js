"use strict";

const fp = require("fastify-plugin");

let currencies = [
  {
    id: "bitcoin",
    name: "Btc",
    vs_currency: "btc",
  },
  {
    id: "ethereum",
    name: "Eth",
    vs_currency: "eth", 
  },
  {
    id: "tether",
    name: "USDT",
    vs_currency: "usd",
  },
  {
    id: "binancecoin",
    name: "BNB",
    vs_currency: "bnb",
  },
  {
    id: "litecoin",
    name: "Ltc",
    vs_currency: "ltc",
  },
  {
    id: "bitshares",
    name: "Bitshares",
    vs_currency: "bits",
  },
  {
    id: "bitcoin-cash",
    name: "Bch",
    vs_currency: "bch",
  },
];

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("getCurrencies", function () {
    return currencies;
  });
});
